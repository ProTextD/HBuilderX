const hx = require("../hbxBridge.js")

function _init(connection) {
}

function getSpaceInfo(workspaceFolder) {
	console.log("workspaceFolder workspaceFolder:",workspaceFolder);
	// return hx.request("unicloud.getSpaceInfo", {
	// 	workspaceFolder:workspaceFolder
	// });
	let result = new Promise((resolve, reject) => {
		hx.request("unicloud.getSpaceInfo", {
			workspaceFolder: workspaceFolder
		}).then((data) => {
			console.log("getSpaceInfo data:",data);
			resolve(data);
		}, reject);
	});
	return result;
}

module.exports = {
	init: _init,
	getSpaceInfo:getSpaceInfo
}