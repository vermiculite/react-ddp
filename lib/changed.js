module.exports = function(state, message) {
    return state.mergeIn([message.collection, message.id], message.fields)
};