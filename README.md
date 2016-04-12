# pad-start

> ES spec-compliant shim for String.prototype.padStart

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/pad-start/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/bubkoo/pad-start/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/pad-start)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/pad-start/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/pad-start)


## Install

```
$ npm install --save pad-start 
```

## Usage

> For more use-cases see the [tests](https://github.com/bubkoo/pad-start/blob/master/test/spec/index.js)

```js

// a polyfill that doesn't overwrite the native method
// var padStart = String.prototype.padStart || require('pad-start');

var padStart = require('pad-start');

padStart('x', 4, 'ab');        // => 'abax'
padStart('x', 4);              // => '   x'
padStart('abcd', 2, '#');      // => 'abcd'
padStart('abcd', 6, '123456'); // => '12abce'

```

## Related

- [pad-end](https://github.com/bubkoo/pad-end) - ES spec-compliant shim for String.prototype.padEnd.
- [start-with](https://github.com/bubkoo/start-with) - Determines whether a string begins with the characters of another string.
- [end-with](https://github.com/bubkoo/end-with) - Determines whether a string ends with the characters of another string.



## Contributing
 
Pull requests and stars are always welcome. 

For bugs and feature requests, please [create an issue](https://github.com/bubkoo/pad-start/issues).

But before doing anything, please read the [CONTRIBUTING](https://github.com/tunnckocore/starts-with/blob/master/CONTRIBUTING.md) guidelines.
