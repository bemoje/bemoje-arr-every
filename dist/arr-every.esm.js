import assertArgs from '@bemoje/assert-args';
import assertType from '@bemoje/assert-type';

/**
 * Returns true if the predicate callback returns true for every element of the passed array; otherwise false.
 * @param {Array} arr - The array
 * @param {predicateCallback} callback - The callback
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
 * @callback predicateCallback
 * @param {*} element - The array element
 * @param {number} index - The element's index in the array
 * @param {Array} arr - The array
 */

export default arrEvery;
