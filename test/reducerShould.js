"use strict";
let Immutable = require('immutable');
let Map = Immutable.Map;
let List = Immutable.List;
let fromJS = Immutable.fromJS;
let reducer = require('../lib/reducer');

describe('reducer', function() {

    it('should handle add', function() {

        const initialState = Map();
        let message = {
            msg: 'added',
            collection: 'tasks',
            id: 'CA7nNBsdLnEQgS6PN',
            fields: {
                text: 'asdjlkajd',
                owner: 'jHfvxvvw52wPRkkFW',
                username: 'sss'
            }
        };
        let finalState = reducer(initialState, message);
        let tasks = finalState.get('tasks');
        tasks.should.be.an.instanceof(Map);
        tasks.size.should.equal(1);
        let task = tasks.get('CA7nNBsdLnEQgS6PN');
        task.get('text').should.equal('asdjlkajd');
        task.get('owner').should.equal('jHfvxvvw52wPRkkFW');
        task.get('username').should.equal('sss');

    });

    it('should handle change', function() {
        let message = {
            msg: "changed",
            collection: "tasks",
            id: "CA7nNBsdLnEQgS6PN",
            fields: {
                checked: true
            }
        };
        let initialState = Map({
            tasks: Map({
                'CA7nNBsdLnEQgS6PN': Map({
                    text: 'asdjlkajd',
                    owner: 'jHfvxvvw52wPRkkFW',
                    username: 'sss',
                    checked: false
                })
            })
        });

        let finalState = reducer(initialState, message);
        let tasks = finalState.get('tasks');
        let task = tasks.get('CA7nNBsdLnEQgS6PN');
        task.get('checked').should.equal(true);
        task.get('owner').should.equal('jHfvxvvw52wPRkkFW');
        task.get('username').should.equal('sss');
        task.get('checked').should.equal(true);
    });

    it('should handle connected', function() {
        let initialState = Map();
        let message = {
            msg: "connect",
            session: "CvWX3qmqShaFR5cHN",
            version: "1",
            support: ["1", "pre2", "pre1"]
        };
        let finalState = reducer(initialState, message);
        finalState.get('connected').get('session').should.equal('CvWX3qmqShaFR5cHN');
        finalState.get('connected').get('version').should.equal('1');
        finalState.get('connected').get('support').should.deep.equal(List.of("1", "pre2", "pre1"));
        should.not.exist(finalState.get('connected').get('msg'));
    });

    it('should handle disconnected', function() {
        let message = {
            msg: 'disconnected'
        };
        let initialState = fromJS({
            connected: {
                session: "CvWX3qmqShaFR5cHN",
                version: "1",
                support: ["1", "pre2", "pre1"]
            }
        });
        let finalState = reducer(initialState, message);
        finalState.get('connected').should.equal(false);
    });

    it('should handle nosub', function() {

        let message = {
            msg: 'nosub',
            id: 'DAfzurvAurhcmXYGD',
            error: {
                error: 404,
                reason: 'Subscription Not found',
                message: 'Subscription not found [404]',
                errorType: 'Meteor.Error'
            }
        };

        let initialState = Map({
            "DAfzurvAurhcmXYGD": "ready"
        });

        let finalState = reducer(initialState, message);
        finalState.get('DAfzurvAurhcmXYGD').get('error').should.equal(404);
        finalState.get('DAfzurvAurhcmXYGD').get('reason').should.equal('Subscription Not found');
        finalState.get('DAfzurvAurhcmXYGD').get('message').should.equal('Subscription not found [404]');
        finalState.get('DAfzurvAurhcmXYGD').get('errorType').should.equal('Meteor.Error');
    });

    it('should handle ready', function() {
        let message = {
            msg: "ready",
            subs: ["DAfzurvAurhcmXYGD"]
        };

        let initialState = Map({
            "DAfzurvAurhcmXYGD": "Disconnected"
        });

        let finalState = reducer(initialState, message);
        finalState.get('DAfzurvAurhcmXYGD').should.equal('ready');
    });

    it('should handle removed', function() {
        let message = {
            msg: "removed",
            collection: "jobs",
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

        let finalState = reducer(initialState, message);
        finalState.should.equal(initialState);
    });

});

