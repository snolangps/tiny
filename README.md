# @shon/tiny
[![npm (scoped)](https://img.shields.io/npm/v/@shon/tiny.svg)](https://github.com/snolangps/tiny)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@shon/tiny.svg)](https://github.com/snolangps/tiny)

Removes all whitespace from string

# Install
<pre>$ npm install @shon/tiny</pre>

# Usage
<pre>
const tiny = require("@shon/tiny");

tiny("So much space!");
//=> "Somuchspace!"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
</pre>