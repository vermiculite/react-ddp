"use strict";
let fromJS = require('immutable').fromJS;
let disconnected = require('../lib/disconnected');

describe('disconnected', function() {
    
    it('should update the state given a disconnect message', function() {
        let message = {};
        let initialState = fromJS({
            connected: {
                session: "CvWX3qmqShaFR5cHN",
                version: "1",
                support: ["1", "pre2", "pre1"]
            }
        });
        let finalState = disconnected(initialState, message);
        finalState.get('connected').should.equal(false);
    });
});
