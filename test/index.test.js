/*!
 * surround.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Support.
 */ 
var Surround = require('../lib/surround');

/**
 * The tested object.
 * 
 * @type {Object}
 */
var index = require('../lib')

/**
 * Simple object used for surrounding.
 * 
 * @type {Object}
 */
var obj = {
  bar: function() {}
};

describe('index', function() {
  it('should return new Surround instnace', function() {
    index(obj, 'bar').should.be.an.instanceof(Surround);
  });
});