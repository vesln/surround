var filter = function(obj, func) {
  return new Filter(obj, func);
};

function Filter(obj, func) {
  var original = obj[func];
  
  obj[func] = function() {
    
    obj[func].__filters.before.forEach(function(fn) {
      fn.apply(obj, arguments);
    });
    
    original.apply(obj, arguments);
    
    obj[func].__filters.after.forEach(function(fn) {
      fn.apply(obj, arguments);
    });
  };
  
  obj[func].__filters = {
    before: [],
    after: []
  };
  
  obj[func].clear = function() {
    delete obj[func].__filters;
    obj[func] = original;
  };
  
  this.target = obj[func];
};

Filter.prototype.before = function(fn) {
  this.target.__filters.before.push(fn);
  return this;
};

Filter.prototype.after = function(fn) {
  this.target.__filters.after.push(fn);
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


foo.bar('main');
foo.bar.clear();
foo.bar('second');