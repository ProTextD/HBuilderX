const { connect } = require("tls");

(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "vscode-jsonrpc", "./langserver"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const rpc = require("vscode-jsonrpc");
    const langserver_1 = require("./langserver");
    let connection = rpc.createMessageConnection(new rpc.StreamMessageReader(process.stdin), new rpc.StreamMessageWriter(process.stdout));
    connection.onRequest('textDocument/outline', langserver_1.getOutline);
    connection.onRequest('textDocument/getLocationType', langserver_1.getLocationType);
    connection.onRequest('textDocument/typeDefinition', langserver_1.gotoDefinition);
    const { parseField, parseGroup, parseWhere } = require('./parser');
    const { getOperator } = require('./operatorSets');
    connection.onRequest('textDocument/parseWhere', parseWhere);
    connection.onRequest('textDocument/parseField', parseField);
    connection.onRequest('textDocument/parseGroup', parseGroup);
    connection.onRequest('textDocument/getOperator', getOperator);
    connection.listen();
    connection.sendNotification('NodeLanguageServerStarted', 'true');
});
