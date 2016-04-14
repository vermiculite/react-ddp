"use strict";

let Map = require('immutable').Map;
let removed = require('../lib/removed');

describe('removed', function () {

    it('should remove an item given an appropriate message', function () {

        let message = {
            msg: "removed",
            collection: "tasks",
            id: "uedz8g5uZgJbskXQP"
        }

        let initialState = Map({
            "tasks": Map({
                "uedz8g5uZgJbskXQP": {
                    owner: 'asdasdad',
                    username: 'sss',
                    checked: false
                }
            })
        });
        
        let finalState = removed(initialState, message);
        let tasks = finalState.get('tasks');
        tasks.size.should.equal(0);


    });
});