"use strict";

module.exports = function(state, message) {
    return state.set('connected', false);
};

