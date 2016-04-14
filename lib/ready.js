"use strict";


module.exports = function(state, message) {
    message.subs.forEach((sub)=> {
        state = state.set(sub, "ready");
    });
    return state;
};