"use strict";

let makeStore = require('../lib/store').makeStore;

describe('store', function() {

    it('should be a redux store configured with the correct reducer', function() {
        const store = makeStore();
        store.dispatch({
            type: 'added',
            collection: 'tasks',
            id: 'CA7nNBsdLnEQgS6PN',
            fields: {
                text: 'asdjlkajd',
                owner: 'jHfvxvvw52wPRkkFW',
                username: 'sss'
            }
        });

        let finalState = store.getState();

        let tasks = finalState.get('tasks');
        tasks.size.should.equal(1);
        let task = tasks.get('CA7nNBsdLnEQgS6PN');
        task.get('text').should.equal('asdjlkajd');
        task.get('owner').should.equal('jHfvxvvw52wPRkkFW');
        task.get('username').should.equal('sss');
    });
});