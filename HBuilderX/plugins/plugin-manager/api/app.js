const hx = require("../hbxBridge.js")

let callbacks = {};

function _init(connection) {
	connection.onRequest("app/execService", function(params){
		if (params.id in callbacks) {
			return callbacks[params.id](params.data);
		}
	})
}

function registService(id,handler) {
	console.log('id'+id);
	console.log('handler'+handler);
	if(id == null)
	{
		console.log('id is null')
	}
	
	if(handler == null)
	{
		console.log('handler is null')
	}
	
	if( id != null && handler != null)
	{
		if(callbacks[id] == undefined)
		{
			callbacks[id] = handler;
		}
		else
		{
			console.log('id is exists')
		}
	}
}

module.exports = {
	init: _init,
	registService:registService
}