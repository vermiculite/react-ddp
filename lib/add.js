'use strict';
let Immutable = require('immutable');
let List = Immutable.List;
let Map = Immutable.Map;

module.exports = function(state, message) {
    let collection = message.collection;
    let entity = Map(message.fields);
    entity = entity.set('_id', message.id);
    return state.updateIn([message.collection], List(), list => list.push(entity));
}