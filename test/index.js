"use strict";
let chai = require('chai');
let should = chai.should();
let sinon = require('sinon');
let ReactDDP = require('..');

describe('react-ddp', function() {
        
        it('should throw an error if no options passed', function() {
            (function(){let reactDDP = new ReactDDP();}).should.throw(Error);
        });
});