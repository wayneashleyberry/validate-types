[![Build Status](https://travis-ci.org/wayneashleyberry/validate-types.svg?branch=master)](https://travis-ci.org/wayneashleyberry/validate-types)

```sh
$ yarn test
yarn test v0.23.4
$ tsc --allowJs --checkJs --noEmit *.js
test.js(4,10): error TS2339: Property 'validators' does not exist on type 'typeof "/Users/wayne/src/github.com/wayneashleyberry/validate-types/node_modules/validate.js/vali...'.
test.js(6,10): error TS2339: Property 'validators' does not exist on type 'typeof "/Users/wayne/src/github.com/wayneashleyberry/validate-types/node_modules/validate.js/vali...'.
test.js(7,18): error TS2339: Property 'isString' does not exist on type 'typeof "/Users/wayne/src/github.com/wayneashleyberry/validate-types/node_modules/validate.js/vali...'.
test.js(10,10): error TS2339: Property 'formatters' does not exist on type 'typeof "/Users/wayne/src/github.com/wayneashleyberry/validate-types/node_modules/validate.js/vali...'.
test.js(33,16): error TS2349: Cannot invoke an expression whose type lacks a call signature. Type 'typeof "/Users/wayne/src/github.com/wayneashleyberry/validate-types/node_modules/validate.js/vali...' has no compatible call signatures.
error Command failed with exit code 1.
```
