"use strict";

let fromJS = require('immutable').fromJS;

module.exports = function(state, message) {
    return state.set('connected', fromJS(message).delete('msg'));
};
