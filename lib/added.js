'use strict';
let Immutable = require('immutable');
let Map = Immutable.Map;

module.exports = function(state, message) {
    let entity = Map(message.fields);
    return state.updateIn([message.collection], Map(), map => map.set(message.id, entity));
}