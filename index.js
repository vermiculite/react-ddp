"use strict";

let makeStore = require('./lib/store').makeStore;
let events = ['connected', 'disconnected', 'ready', 'nosub', 'added', 'changed', 'removed', 'result', 'updated'];

module.exports = function(ddpClient) {
    let store = makeStore();
    events.forEach(function(event) {
        ddpClient.on(event, function(ddpMessage) {
            store.dispatch(convertMsgToType(ddpMessage));
        });
    });
    return store;
};

function convertMsgToType(obj) {
    let type = obj.msg;
    obj.type = type;
    return obj;
};

