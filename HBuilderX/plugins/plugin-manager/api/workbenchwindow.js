const hbx = require("../hbxBridge.js")
const Disposable = require("./disposable.js");
const TextEditor = require("./texteditor.js").TextEditor;
const OutputChannel = require('./sashview.js').OutputChannel;
const workspace = require("./workspace");
const WebViewPanel = require("./webviewpanel.js");
const WebViewDialog = require("./webviewdialog.js");
const ConsoleView = require("./consoleView.js")

let messageCallbacks = {};
let messageId = 0;

let g_viewId2DataProvider = new Map();
let g_treeItemId = 0;
let g_treeId2Item = new Map();
let g_urlHandlerStorage = new Map();

let g_viewMap = new Map();
let g_webViewDlgMap = new Map();
let g_customEditorProvider = new Map();
let g_consoleView = new Map();

function _init(connection){
	connection.onRequest("window/hyperlink_onOpen", function(params){
		// params.id
		// params.hyperid
		let view = g_consoleView.get(params.id);
		if(!view)
			throw new Error("can not process hyperlink open event with [" + params.id + "]");
		view.fireonOpen(params.hyperid)
	});
	connection.onRequest("window/setSelectedItem",function(params){
		if(params.id in messageCallbacks){
			messageCallbacks[params.id](params.item);
			delete messageCallbacks[params.id];
		}
	});

	connection.onRequest("treeview/getChildren", function(params) {
		return getChildren(params.viewid, params.data);
	});

	connection.onRequest("treeview/showItem", function(params) {
		return showTreeItem(params.viewid, params.data, params.preview);
	});

	/**
	 * 	@param {query:String, id:pluginid}
	 *  query是在?后面的内容
	 */
	connection.onRequest("window/handleUri", function(params){
		var handler = g_urlHandlerStorage.get(params.id);
		if((undefined == handler) || (undefined == handler.handleUri)) 
			throw new Error("can not process handleUri with [" + params.id + "]");
		handler.handleUri(new hbx.Uri(params.query));
	});

	connection.onRequest("window/getViewInfo", function (params) {
		let viewId = params;
		let info = g_viewMap.get(viewId);
		let result = {};
		if(info)
		{
			result.type = info.type;
			result.id = viewId;
			result.info = {};
			if (info.type == 'webview')
			{
				result.info.html = info.view.webView.html;
				result.info.options = info.view.options;
			}
		}
		return result;
	});

	connection.onRequest("window/removeView", function (params) {
		removeView(params);
	});

	connection.onRequest("window/postWebViewMessage", function (params) {
		let viewId = params.viewId;
		let info = g_viewMap.get(viewId);
		if (info && info.type == 'webview' && info.view) {
			info.view.webView.dispatchMessage(params.message);
		}
	});

	connection.onRequest("window/openCustomDocument", function (params) {
		if (!g_customEditorProvider.has(params.editorType)) {
			throw new Error("CustomEditorProvider for the [" + params.editorType + "] not found");
		}
		let fileUri = params.fileUri;
		let info = g_customEditorProvider.get(params.editorType);
		let docMap = info.docMap;
		let provider = info.editorProvider;
		let customPromise = provider.openCustomDocument(fileUri);
		customPromise.then(document => {
			docMap.set(fileUri, document);
			let request = hbx.request("window.createWebViewEditor", fileUri);
			request.then((editorId) => {
				if (editorId) {
					if (g_viewMap.has(editorId))
						throw new Error("custom edit id duplicate" + editorId);
					provider.resolveCustomEditor(document, createWebView(editorId, {}));
				}
				else {
					console.log("There is no empty custom editor."); // 实际可能因为是重复打开，此时不需要做操作
				}
			});
		});
	});

	// 在指定自定义编辑器中打开文件
	/*
		fileUri: 指定打开的文件
		oldFileUri: 需要移除文件
		editorType: 自定义编辑器type
		editorId: 指定自定义编辑器Id
	*/
	connection.onRequest("window/openCustomDocumentInView", function (params) {
		if (!g_customEditorProvider.has(params.editorType)){
			throw new Error("CustomEditorProvider for the [" + params.id + "] not found");
		}
		let info = g_customEditorProvider.get(params.editorType);
		let docMap = info.docMap;
		let provider = info.editorProvider;
		let customPromise = provider.openCustomDocument(params.fileUri);
		customPromise.then(document => {
			let editorId = params.editorId;
			docMap.set(params.fileUri, document);
			if (!g_viewMap.has(editorId) || g_viewMap.get(editorId).type != "webview")
			{
				throw new Error("Custom editor webview doesn't exist, " + editorId);
			}
			provider.resolveCustomEditor(document, g_viewMap.get(editorId).view);
			if (docMap.has(params.oldFileUri)) {
				docMap.get(params.oldFileUri).dispose();
				docMap.delete(params.oldFileUri);
			}
		});
	});

	connection.onRequest("window/saveCustomDocument", function (params) {
		if (!g_customEditorProvider.has(params.editorType)){
			throw new Error("CustomEditorProvider for the [" + params.id + "] not found");
		}
		let info = g_customEditorProvider.get(params.editorType);
		let docMap = info.docMap;
		let provider = info.editorProvider;
		let fileUri = params.fileUri;
		if(docMap.has(fileUri)){
			return provider.saveCustomDocument(docMap.get(fileUri))
		}
		return false;
	});

	connection.onRequest("window/saveCustomDocumentAs", function (params) {
		if (!g_customEditorProvider.has(params.editorType)) {
			throw new Error("CustomEditorProvider for the [" + params.id + "] not found");
		}
		let info = g_customEditorProvider.get(params.editorType);
		let docMap = info.docMap;
		let provider = info.editorProvider;
		let fileUri = params.fileUri;
		if (docMap.has(fileUri)) {
			return provider.saveCustomDocumentAs(docMap.get(fileUri), params.target)
		}
		return false;
	});

	connection.onRequest("window/webViewDialogClosed", function (viewId) {
		let dialog = g_webViewDlgMap.get(viewId);
		if (dialog) {
			g_webViewDlgMap.delete(viewId);
			dialog.dispatchCloseEvent();
			removeView(viewId);
		}
	});
}

/**
 * @param {String} text
 * @param {Number} hideAfterTimeout
 */
function setStatusBarMessage(text, hideAfterTimeout, level) {
	hbx.request("window.setStatusBarMessage", {
		text: text,
		hideAfterTimeout: hideAfterTimeout,
		level: level
	});
	return new Disposable(function(){
		hbx.request("window.clearStatusBarMessage");
	});
}

function clearStatusBarMessage(){
	hbx.request("window.clearStatusBarMessage");
}

/**
 * @param {String} message
 * @param {String[]} buttons
 */
function _showMessage(type,message, buttons) {
	let id = "message-" + (messageId++);
	let result = new Promise((resolve, reject) => {
		hbx.request("window.showMessage", {
			type:type,
			message: message,
			buttons:buttons,
			id:id
		}).then((show)=>{
			if(show){
				messageCallbacks[id] = resolve;
			}
		},reject);
	});
	return result;
	
}
function showQuickPick(items,options){
	let id = "quick-pick-" + (messageId++);
	let result = new Promise((resolve, reject) => {
		hbx.request("window.showQuickPick", {
			items:items,
			options: options,
			id:id
		}).then((success)=>{
			if(success){
				messageCallbacks[id] = resolve;
			}
		},reject);
	});
	return result;
}
/**
 * @param {String} message
 * @param {String[]} buttons
 */
function showErrorMessage(message, buttons) {
	return _showMessage("error",message,buttons);
}

function showWarningMessage(message, buttons){
	return _showMessage("warn",message,buttons);
}
/**
 * @param {String} message
 * @param {String[]} buttons
 */
function showInformationMessage(message, buttons) {	
	return _showMessage("info",message,buttons);
}

function showMessageBox(options) {	
	let result = new Promise((resolve, reject) => {
		hbx.request("window.showMessageBox", options
		).then((data)=>{
				resolve(data);
		},reject);
	});
	return result;
}

function getActiveTextEditor() {
	let result = new Promise((resolve, reject) => {
		hbx.request("window.getActiveTextEditor").then((resp)=>{
			let editor = new TextEditor(resp);
			resolve(editor);
		},reject);
	});
	return result;
}

function showTextDocument(doc, options){
	let result = new Promise((resolve,reject)=>{
		let showPromise = hbx.request("window.showTextDocument",{doc, options});
		showPromise.then((resp)=>{
			let editor = new TextEditor(resp);
			resolve(editor);
		},reject);
	});
	return result;
}

function createOutputChannel(channel){
	return new OutputChannel(channel);
}

/**
 * 
 * @param {String} id 
 * @param {TreeDataProvider} provider 
 */
function createTreeView(id, options) {

	g_viewMap.set(id, { type: 'treeview', id:id});

	g_viewId2DataProvider.set(id, options.treeDataProvider);

	if(options.treeDataProvider.onDidChangeTreeData) {
		options.treeDataProvider.onDidChangeTreeData(async function(item) {
			await hbx.request("view.refresh", {
				innerId: item ? item.innerId: -1,
				id: id});

			//if(item && item.hasOwnProperty("isDirectory") && !item.isDirectory) {
				if(item.resourceUri)
					workspace.closeTextDocument(item.resourceUri.external);
			//}
		})
	}
}

/**
 * 
 * @param {String} id 
 * @param {TreeViewOptions<unknown>} options 
 */
function registerTreeDataProvider(id, options) {
	g_viewId2DataProvider.set(id, options);

	if(options.treeDataProvider.onDidChangeTreeData) {
		options.treeDataProvider.onDidChangeTreeData(async function(innerId) {
			await hbx.request("view.refresh", {
				innerId: item ? item.innerId: -1,
				id: id});
			if(item.resourceUri)
				workspace.closeTextDocument(item.resourceUri.external);
		})
	}
}

/**
 * 
 * @param {String} id 
 */
function getTreeDataProvider(id) {
	return g_viewId2DataProvider.get(id);
}

/**
 * 
 * @param {String} id 
 * @param {any} element 
 */
async function getChildren(id, element) {
	let treeDataProvider = g_viewId2DataProvider.get(id);
	let items = [];
	if(treeDataProvider) {	

		if(element)
			element = g_treeId2Item.get(element.innerId);

		let result = await treeDataProvider.getChildren(element);
		for (let i = 0; i < result.length; ++i) {
			let item = result[i];
			let treeItem = treeDataProvider.getTreeItem(item);

			item.innerId = g_treeItemId;
			treeItem.innerId = g_treeItemId;
			g_treeId2Item.set(g_treeItemId++, item);

			items.push(treeItem);
		}
		return items;
	}
}

async function showTreeItem(id, element, preview) {
	let treeDataProvider = g_viewId2DataProvider.get(id);
	if(element)
		element = g_treeId2Item.get(element.innerId);
	if(treeDataProvider) {
		let document = await treeDataProvider.provideTextDocumentContent(element.resource.uri);
		hbx.request("workspace.openRemoteDocument", {
			uri: element.resource.uri.toString(),
			context: document,
			preview: preview
		});
	}	
}

/**
 * 
 * @param {String} id containerid
 */
function showView(params) {
	if (!params.viewid && params.viewId){
		params.viewid = params.viewId;
	}
	if (!params.containerid && params.containerId) {
		params.containerid = params.containerId;
	}
	hbx.request("window.showView", params);
}

function showInputBox(options){
    let id = "input-box-" + (messageId++);
    let result = new Promise((resolve, reject) => {
    	hbx.request("window.showInputBox", {
    		options: options,
    		id:id
    	}).then((success)=>{
    		if(success){
    			messageCallbacks[id] = resolve;
    		}
    	},reject);
    });
    return result;
}

/**
 * @param {}
 * from user extension/plugin
 *  hx.window.registerUriHandler({
        handleUri:function(uri){
            let params = uri.query;
        }
	});
	*
	context 是一个PluginContext类
	{id:,...}
 */
function registerUriHandler(handleUriObject, context){
	
	if(undefined == context || (undefined == context.id)){
		throw new Error("missing argument with 'context'");
	}
	if((undefined == handleUriObject.handleUri) || ("function" != typeof handleUriObject.handleUri)){
		// console.error("missing function 'handleUri'");
		throw new Error("missing function 'handleUri'");		
	}
	
	g_urlHandlerStorage.set(context.id, handleUriObject);
	return new Disposable(function(){
		g_urlHandlerStorage.delete(context.id);
	});
	
}

function createWebView(viewid, options){
	let info = g_viewMap.get(viewid);
	if (!info)
	{
		let view = new WebViewPanel(viewid, options);
		g_viewMap.set(viewid, { type: 'webview', id: viewid, view: view});
		return view;
	}
	throw new Error("view id duplicate");
}

function removeView(viewid) {
	let info = g_viewMap.get(viewid);
	if (info) {
		if(info.type == 'webview')
		{
			info.view.onDidDisposeEmitter.fire(undefined);
		}
		g_viewMap.delete(viewid);
	}
}

function registerCustomEditorProvider(type, provider){
	let tmp = g_customEditorProvider.get(type);
	if(!tmp){
		g_customEditorProvider.set(type, { editorProvider: provider, docMap: new Map()});
	}
	else{
		throw new Error("editor type duplicate");
	}
}

function createWebViewDialog(dialogOpt, webOpt) {
	let dialog = new WebViewDialog(dialogOpt, webOpt);
	g_webViewDlgMap.set(dialog.id, dialog);
	return dialog;
}

function createOutputView(options) {
	let oldView = g_consoleView.get(options.id);
	if(oldView){		
		return oldView;
	}
	
	oldView = new ConsoleView(options.id, options.title)
	g_consoleView.set(options.id, oldView)
	return oldView	
}

function showFileWizardDialog(options){
	let p =  hbx.request("window.showFileWizard", options);
	return p;
}

function showWorkspaceFolderPick(options) {
	let p = hbx.request("window.showProjectPick", options);
	return p;
}

let activeWindow = new Proxy({
	init:_init,
	setStatusBarMessage: setStatusBarMessage,
	clearStatusBarMessage:clearStatusBarMessage,
	showErrorMessage: showErrorMessage,
	showInformationMessage: showInformationMessage,
	showMessageBox:showMessageBox,
	showWarningMessage:showWarningMessage,
	showQuickPick:showQuickPick,
    showInputBox:showInputBox,
	getActiveTextEditor: getActiveTextEditor,
	showTextDocument:showTextDocument,
	createOutputChannel:createOutputChannel,
	createTreeView:createTreeView,
	registerTreeDataProvider:registerTreeDataProvider,
	showView:showView,
	registerUriHandler: registerUriHandler,
	createWebView: createWebView,
	registerCustomEditorProvider: registerCustomEditorProvider,
	createOutputView:createOutputView,
	createWebViewDialog:createWebViewDialog,
	showFileWizardDialog: showFileWizardDialog,
	showWorkspaceFolderPick: showWorkspaceFolderPick
}, {
	get: function(target, name) {
		if (name in target) {
			return target[name];
		}
		let getProperty = {
			activeTextEditor: function() {
				return new Proxy({}, {
					get: function(target, name) {
						if (name in TextEditor) {
							return TextEditor[name]();
						}
						return undefined;
					}
				});
			}
		}
		if (name in getProperty) {
			return getProperty[name]();
		}
		return undefined;
	}
});

module.exports = activeWindow;
