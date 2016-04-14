"use strict";

let ready = require('../lib/ready');
let Map = require('immutable').Map;

describe('ready', function () {

    it('should add a previously non existing key.', function () {

        let message = {
            msg: "ready",
            subs: ["DAfzurvAurhcmXYGD"]
        };

        let initialState = Map();

        let finalState = ready(initialState, message);
        finalState.get('DAfzurvAurhcmXYGD').should.equal('ready');

    });

    it('should update an already set state', function () {

        let message = {
            msg: "ready",
            subs: ["DAfzurvAurhcmXYGD"]
        };

        let initialState = Map({
            "DAfzurvAurhcmXYGD": "Disconnected"
        });

        let finalState = ready(initialState, message);
        finalState.get('DAfzurvAurhcmXYGD').should.equal('ready');

    });
    
});