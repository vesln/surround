/*!
 * surround.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Surround class.
 * 
 * @type {Function}
 */
var Surround = require('./surround');

/**
 * Filter proxy.
 * 
 * @param {Object} Object
 * @param {Function} Function.
 * @api public
 */
module.exports = function(obj, fn) {
  return new Surround(obj, fn);
};