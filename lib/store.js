"use strict";

let createStore = require('redux').createStore;
let reducer = require('./reducer');

exports.makeStore = function() {
    return createStore(reducer);
};