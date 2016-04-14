"use strict";

module.exports = function(state, message) {
    return state.deleteIn([message.collection, message.id]);
};