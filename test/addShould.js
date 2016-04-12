'use strict';

let add = require('../lib/add');
let Map = require('immutable').Map;
let List = require('immutable').List;

describe('add', function() {
    
    it('should add an entitiy to the state following the name of the collection.', function() {
       let message = {
           msg: 'added',
           collection: 'tasks',
           id: 'CA7nNBsdLnEQgS6PN',
           fields: {
               text: 'asdjlkajd',
               owner: 'jHfvxvvw52wPRkkFW',
               username: 'sss'
           }
       }
       let initialState = Map();
       let finalState = add(initialState, message);
       let tasks = finalState.get('tasks');
       tasks.should.be.an.instanceof(List);
       tasks.size.should.equal(1);
       let task = tasks.last();
       task.get('text').should.equal('asdjlkajd');
       task.get('owner').should.equal('jHfvxvvw52wPRkkFW');
       task.get('username').should.equal('sss');
       task.get('_id').should.equal('CA7nNBsdLnEQgS6PN');
    });
    
    it('should add two entitiies to the state following the name of the collection.', function() {
       let message1 = {
           msg: 'added',
           collection: 'tasks',
           id: 'CA7nNBsdLnEQgS6PN',
           fields: {
               text: 'asdjlkajd',
               owner: 'jHfvxvvw52wPRkkFW',
               username: 'sss'
           }
       };
       let message2 = {
           msg: 'added',
           collection: 'tasks',
           id: 'DA9nNBsdLnERgT4KP',
           fields: {
               text: 'two',
               owner: 'jHfvxvvw52wPRkkFW',
               username: 'sss'
           }
       }
       let initialState = Map();
       let firstState = add(initialState, message1);
       let finalState = add(firstState, message2);
       let tasks = finalState.get('tasks');
       tasks.should.be.an.instanceof(List);
       tasks.size.should.equal(2);
       
       let task = tasks.last();
       task.get('text').should.equal('two');
       task.get('owner').should.equal('jHfvxvvw52wPRkkFW');
       task.get('username').should.equal('sss');
       task.get('_id').should.equal('DA9nNBsdLnERgT4KP');
       
       tasks = tasks.pop();
       task = tasks.last();
       task.get('text').should.equal('asdjlkajd');
       task.get('owner').should.equal('jHfvxvvw52wPRkkFW');
       task.get('username').should.equal('sss');
       task.get('_id').should.equal('CA7nNBsdLnEQgS6PN');
    });
    
    it('should add two entitiies to the state following the name of the collection.', function() {
       let message1 = {
           msg: 'added',
           collection: 'tasks',
           id: 'CA7nNBsdLnEQgS6PN',
           fields: {
               text: 'asdjlkajd',
               owner: 'jHfvxvvw52wPRkkFW',
               username: 'sss'
           }
       };
       let message2 = {
           msg: 'added',
           collection: 'tasks',
           id: 'DA9nNBsdLnERgT4KP',
           fields: {
               text: 'two',
               owner: 'jHfvxvvw52wPRkkFW',
               username: 'sss'
           }
       }
       let initialState = Map();
       let firstState = add(initialState, message1);
       let finalState = add(firstState, message2);
       let tasks = finalState.get('tasks');
       tasks.should.be.an.instanceof(List);
       tasks.size.should.equal(2);
       
       let task = tasks.last();
       task.get('text').should.equal('two');
       task.get('owner').should.equal('jHfvxvvw52wPRkkFW');
       task.get('username').should.equal('sss');
       task.get('_id').should.equal('DA9nNBsdLnERgT4KP');
       
       tasks = tasks.pop();
       task = tasks.last();
       task.get('text').should.equal('asdjlkajd');
       task.get('owner').should.equal('jHfvxvvw52wPRkkFW');
       task.get('username').should.equal('sss');
       task.get('_id').should.equal('CA7nNBsdLnEQgS6PN');
    });
});