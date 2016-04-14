"use strict";

let Map = require('immutable').Map;
let List = require('immutable').List;
let connect = require('../lib/connected');

describe('connected', function () {

    it('should update the connected property given a connect message', function () {
        let initialState = Map();
        let message = {
            msg: "connect",
            session: "CvWX3qmqShaFR5cHN",
            version: "1",
            support: ["1", "pre2", "pre1"]
        };
        let finalState = connect(initialState, message);
        finalState.get('connected').get('session').should.equal('CvWX3qmqShaFR5cHN');
        finalState.get('connected').get('version').should.equal('1');
        finalState.get('connected').get('support').should.deep.equal(List.of("1", "pre2", "pre1"));
        should.not.exist(finalState.get('connected').get('msg'));
    });
});
