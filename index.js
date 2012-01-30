var filter = function(func) {
  return new Filter(func);
};

function Filter(func) {
  func.__filters = { 
    before: [], 
    after: []
  };
  this.original = func;
  func = function() {};
};

Filter.prototype.before = function(func) {
  return this;
};

Filter.prototype.after = function(func) {
  return this;
};


var foo = {
  bar: function() {
    console.log.apply(console, arguments);
  }
};

filter(foo, 'bar')
  .before(function() {
    console.log('before');
  })
  .before(function() {
    console.log('before 2');
  })
  .after(function() {
    console.log('after');
  });
