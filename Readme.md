[![Build Status](https://secure.travis-ci.org/vesln/surround.png)](http://travis-ci.org/vesln/surround)

# surround

## Description

surround is small library without any dependencies that provides an easy way to surround
a function with before and after functionality.
	
## Synopsis

```js

var surround = require('surround');

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

```

Note that the return value of the main function is not filtered at all, so those are not filters.
They are more special than filters.

## Requirements

- NPM (http://npmjs.org/)
- Node.js 0.6 (http://nodejs.org/)

## Install

```
$ npm install surround
```

## Tests

```
$ npm install
$ make test
```

## License

MIT License

Copyright (C) 2012 Veselin Todorov

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.