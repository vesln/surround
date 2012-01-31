/*!
 * surround.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Surround factory.
 * 
 * @type {Function}
 */
var surround = require('../lib');

/**
 * Dummy object.
 * 
 * @type {Object}
 */
var obj = {
  bar: function() {
    console.log('main');
  }
};

surround(obj, 'bar')
  .before(function() { console.log('before1') })
  .before(function() { console.log('before2') })
  .after(function() { console.log('after1') })
  .after(function() { console.log('after2') })

// Magic!
obj.bar();

// Resetting..
obj.bar.reset();

// The basic func only.
obj.bar();

surround(obj, 'bar').after(function() { console.log('new after') });

obj.bar();