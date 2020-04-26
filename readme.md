# @bemoje/arr-every

Returns true if the predicate callback returns true for every element of the passed array; otherwise false.

#### Version

<span><a href="https://npmjs.org/@bemoje/arr-every" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/arr-every" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/arr-every" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-arr-every.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/arr-every" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-arr-every.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/arr-every" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/arr-every" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-arr-every/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-arr-every" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/arr-every
npm install --save @bemoje/arr-every
npm install --save-dev @bemoje/arr-every
```

## Usage

```javascript
import arrEvery from '@bemoje/arr-every'

const arr = [1, 2, 3, 4, 5]

arrEvery(arr, (num) => {
	return num > 0
})
//=> true

arrEvery(arr, (num) => {
	return num > 3
})
//=> false

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### arrEvery

##### Returns
true if the predicate callback returns true for every element of the passed array; otherwise false.

##### Parameters

-   `arr` **[Array][5]** The array

-   `callback` **[predicateCallback][6]** The callback

##### Returns
**[boolean][7]** 

## predicateCallback

Type: [Function][8]

##### Parameters

-   `element` **any** The array element

-   `index` **[number][9]** The element's index in the array

-   `arr` **[Array][5]** The array

[1]: #arrevery

[2]: #parameters

[3]: #predicatecallback

[4]: #parameters-1

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[6]: #predicatecallback

[7]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[8]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[9]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number