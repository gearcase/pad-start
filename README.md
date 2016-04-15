# pad-start <sup>[![Version Badge](http://versionbadg.es/gearcase/pad-start.svg)](https://npmjs.org/package/pad-start)</sup>


> ES spec-compliant String.prototype.padStart shim.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/gearcase/pad-start/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/gearcase/pad-start/master.svg?style=flat-square)](https://travis-ci.org/gearcase/pad-start)
[![coverage:?](https://img.shields.io/coveralls/gearcase/pad-start/master.svg?style=flat-square)](https://coveralls.io/github/gearcase/pad-start)



## Install

```
$ npm install --save pad-start 
```


## Usage

> For more use-cases see the [tests](https://github.com/gearcase/pad-start/blob/master/test/spec/index.js)

```js

// a polyfill that doesn't overwrite the native method

var padStart = require('pad-start');

padStart('x', 4, 'ab');        // => 'abax'
padStart('x', 4);              // => '   x'
padStart('abcd', 2, '#');      // => 'abcd'
padStart('abcd', 6, '123456'); // => '12abcd'

```


## Related

- [pad-end](https://github.com/gearcase/pad-end) - ES spec-compliant String.prototype.padEnd shim.
- [start-with](https://github.com/gearcase/start-with) - Determines whether a string begins with the characters of another string.
- [end-with](https://github.com/gearcase/end-with) - Determines whether a string ends with the characters of another string.



## Contributing
 
Pull requests and stars are highly welcome. 

For bugs and feature requests, please [create an issue](https://github.com/gearcase/pad-start/issues).

