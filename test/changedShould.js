'use strict';

let changed = require('../lib/changed');
let Immutable = require('immutable');
let Map = Immutable.Map;
let List = Immutable.List;

describe('changed', function() {

    it('change one entity', function() {
        let message = {
            msg: "changed",
            collection: "tasks",
            id: "CA7nNBsdLnEQgS6PN",
            fields: {
                checked: true
            }
        };
        let initialState = Map({
            tasks: List.of(Map({
                _id: 'CA7nNBsdLnEQgS6PN',
                text: 'asdjlkajd',
                owner: 'jHfvxvvw52wPRkkFW',
                username: 'sss',
                checked: false
            }))
        });

        let finalState = changed(initialState, message);
        let tasks = finalState.get('tasks');
        let task = tasks.last();
        task.get('checked').should.equal(true);
        task.get('_id').should.equal('CA7nNBsdLnEQgS6PN');
    });


});