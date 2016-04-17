"use strict";

let redux = require('redux');
let createStore = redux.createStore;
let reducer = require('./lib/reducer');

const store = createStore(reducer);

