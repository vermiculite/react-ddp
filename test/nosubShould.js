"use strict";

let Map = require('immutable').Map;
let nosub = require('../lib/nosub');

describe('nosub', function() {

    it('should update for nosub', function () {

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

        let finalState = nosub(initialState, message);
        finalState.get('DAfzurvAurhcmXYGD').should.not.equal('ready');


    });

    it('should update the state with the error given a nosub', function () {

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

        let finalState = nosub(initialState, message);
        finalState.get('DAfzurvAurhcmXYGD').get('error').should.equal(404);
        finalState.get('DAfzurvAurhcmXYGD').get('reason').should.equal('Subscription Not found');
        finalState.get('DAfzurvAurhcmXYGD').get('message').should.equal('Subscription not found [404]');
        finalState.get('DAfzurvAurhcmXYGD').get('errorType').should.equal('Meteor.Error');



    });
});