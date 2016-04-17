"use strict";

let Map = require('immutable').Map;

let added = require('./added');
let changed = require('./changed');
let connected = require('./connected');
let disconnected = require('./disconnected');
let nosub = require('./nosub');
let ready = require('./ready');
let removed = require('./removed');


module.exports = function (state, action) {

    state = state || Map();
    switch (action.msg) {
        case 'added':
            return added(state, action);
        case 'changed':
            return changed(state, action);
        case 'connect':
            return connected(state, action);
        case 'disconnected':
            return disconnected(state, action);
        case 'nosub':
            return nosub(state, action);
        case 'ready':
            return ready(state, action);
        case 'removed':
            return removed(state, action);
    }
};

