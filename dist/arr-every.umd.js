(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/assert-args'), require('@bemoje/assert-type')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/assert-args', '@bemoje/assert-type'], factory) :
	(global = global || self, global['arr-every'] = factory(global.assertArgs, global.assertType));
}(this, (function (assertArgs, assertType) { 'use strict';

	assertArgs = assertArgs && Object.prototype.hasOwnProperty.call(assertArgs, 'default') ? assertArgs['default'] : assertArgs;
	assertType = assertType && Object.prototype.hasOwnProperty.call(assertType, 'default') ? assertType['default'] : assertType;

	/**
	 * Returns true if the predicate  is satisfied for every element of the passed array; otherwise false.
	 * @param {Array} arr - The array
	 * @param {predicate} callback - The callback
	 * @returns {boolean}
	 */
	function arrEvery(arr, callback) {
		assertArgs(arr, callback);
		assertType(Array, arr);
		assertType(Function, callback);

		for (let i = 0, len = arr.length; i < len; i++) {
			if (!callback(arr[i], i, arr)) {
				return false
			}
		}

		return true
	}

	/**
	 * @callback predicate
	 * @param {*} element - The array element
	 * @param {number} index - The element's index in the array
	 * @param {Array} arr - The array
	 * @returns {boolean}
	 */

	return arrEvery;

})));
