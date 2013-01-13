
/**
 * Internal dependencies.
 */

var Surround = require('../lib/surround')
  , index = require('../lib');

/**
 * Simple object used for surrounding.
 */

var obj = {
  bar: function() {}
};

describe('index', function() {
  it('should return new Surround instnace', function() {
    index(obj, 'bar').should.be.an.instanceof(Surround);
  });
});
