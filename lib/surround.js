/*!
 * surround.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Surround constructor.
 * 
 * @param {Object} Object.
 * @param {Function} Function.
 */
function Surround(obj, fn) {
  var self = this;
  var orig = obj[fn];
  
  // Already surrouneded.
  if (obj[fn].__stacks) {
    this.stacks = obj[fn].__stacks;
    return this;
  }
  
  this.stacks = this.defaults();
  
  // The replace of the original function.
  obj[fn] = function() {
    self.stacks.before
      .concat([orig], self.stacks.after)
      .forEach(function(fn) {
        fn.apply(obj, arguments);
      });
  };
  
  // Resets the stack and returns the basic func back.
  obj[fn].reset = function() {
    obj[fn] = orig;
    self.stacks = self.defaults();
  };
  
  // The stacks are cached in the func itself.
  obj[fn].__stacks = this.stacks;
};

/**
 * Returns default stack object.
 * 
 * @returns {Object} Stack.
 * @api private
 */
Surround.prototype.defaults = function() {
  return { 
    before: [], 
    after: [] 
  };
};

/**
 * Registers before function.
 * 
 * @parma {Function} Function to be registerd.
 * @returns `this`.
 * @api public
 */
Surround.prototype.before = function(fn) {
  this.stacks.before.push(fn);
  return this;
};

/**
 * Registers after function.
 * 
 * @param {Function} Function to be registerd.
 * @returns `this`.
 * @api public
 */
Surround.prototype.after = function(fn) {
  this.stacks.after.push(fn);
  return this;
};

/**
 * Returns the before and the after stacks.
 * 
 * @returns {Object}
 * @api public
 */
Surround.prototype.stack = function() {
  return this.stacks;
};

/**
 * Removes a function from the after stack.
 * 
 * @param {Number} Index. [optional]
 * @returns `this`.
 * @api public
 */
Surround.prototype.popAfter = function(i) {
  if (arguments.length === 0) this.stacks.after.pop();
  else this.stacks.after.splice(i, 1);
  return this;
};

/**
 * Removes a function from the before stack.
 * 
 * @param {Number} Index. [optional]
 * @returns `this`.
 * @api public
 */
Surround.prototype.popBefore = function(i) {
  if (arguments.length === 0) this.stacks.before.pop();
  else this.stacks.before.splice(i, 1);
  return this;
};

/**
 * Expose `Surround`.
 */
module.exports = Surround;