/*!
 * surround.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * The tested class.
 * 
 * @type {Function}
 */
var Surround = require('../lib/surround');

/**
 * Simple object used for surrounding.
 * 
 * @type {Object}
 */
var obj = {
  bar: function() {
    console.log('main');
  }
};

/**
 * Functions registerted in the tests.
 */
var fn = function() {
  console.log('fn1');
};

var fn2 = function() {
  console.log('fn2');
};

describe('Surround', function() {
  
  beforeEach(function() {
    obj.bar.reset && obj.bar.reset();
  });
  
  describe('constructor', function() {
    it('should append reset func to the surrounded object itself which clears the appended funcs', function() {
      var surround = new Surround(obj, 'bar');
      obj.bar.reset.should.be.a.function;
      surround.after(fn);
      surround.stack().after.length.should.eql(1);
      obj.bar.reset();
      surround.stack().after.length.should.eql(0);
    });
    
    it('should keep the old stack', function() {
      var surround = new Surround(obj, 'bar').after(fn);
      var surround2 = new Surround(obj, 'bar').after(fn);
      surround2.stack().after.length.should.eql(2);
    });
  });
  
  describe('before', function() {
    it('should register a new function before the execution of the main function', function() {
      var surround = new Surround(obj, 'bar');
      surround.before(fn);
      surround.stack().before.length.should.eql(1);
      surround.stack().before[0].should.eql(fn);
      surround.before(fn2);
      surround.stack().before[1].should.eql(fn2);
    });
  });
  
  describe('after', function() {
    it('should register a new function after the execution of the main function', function() {
      var surround = new Surround(obj, 'bar');
      surround.after(fn);
      surround.stack().after.length.should.eql(1);
      surround.stack().after[0].should.eql(fn);
      surround.after(fn2);
      surround.stack().after[1].should.eql(fn2);
    });
  });
  
  describe('stack', function() {
    it('should return all registered functions', function() {
      var surround = new Surround(obj, 'bar');
      surround.after(fn).before(fn2);
      surround.stack().should.eql({
        before: [fn2],
        after: [fn],
      });
    });
  });
  
  describe('popAfter', function() {
    it('should remove the last func if no index is supplied.', function() {
      var surround = new Surround(obj, 'bar');
      surround.after(fn).after(fn2);
      surround.popAfter().stack().after.should.eql([fn]);
    });
    
    it('should supplied index from the after stack.', function() {
      var surround = new Surround(obj, 'bar');
      surround.after(fn).after(fn2);
      surround.popAfter(0).stack().after.should.eql([fn2]);
    });
  });
  
  describe('popBefore', function() {
    it('should remove the last func if no index is supplied.', function() {
      var surround = new Surround(obj, 'bar');
      surround.before(fn).before(fn2);
      surround.popBefore().stack().before.should.eql([fn]);
    });
    
    it('should supplied index from the after stack.', function() {
      var surround = new Surround(obj, 'bar');
      surround.before(fn).before(fn2);
      surround.popBefore(0).stack().before.should.eql([fn2]);
    });
  });
});