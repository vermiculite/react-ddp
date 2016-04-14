"use strict";

let Map = require('immutable').Map;

module.exports = function(state, message) {
    return state.set(message.id, Map(message.error));
};