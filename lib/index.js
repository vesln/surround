
/**
 * Internal dependencies.
 */

var Surround = require('./surround');

/**
 * Surround proxy.
 *
 * @param {Object} Object
 * @param {Function} Function.
 * @api public
 */

module.exports = function(obj, fn) {
  return new Surround(obj, fn);
};
