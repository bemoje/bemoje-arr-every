import arrEvery from '../src/arr-every'

describe('arrEvery', () => {
	test('callback is passed all correct values', () => {
		const arr = [1, 2, 3, 4, 5]
		const indexCheck = new Array(arr.length)

		arrEvery(arr, (element, i, array) => {
			expect(arr === array).toBe(true)
			expect(arr[i] === array[i]).toBe(true)
			expect(Number.isInteger(i)).toBe(true)
			indexCheck[i] = arr[i]
			return true
		})

		expect(indexCheck).toStrictEqual(arr)
	})
	test('returns correct value', () => {
		const arr = [1, 2, 3, 4, 5]

		const isGreaterThanZero = (n) => n > 0
		const isGreaterThanThree = (n) => n > 3

		expect(arrEvery(arr, isGreaterThanZero)).toBe(true)
		expect(arrEvery(arr, isGreaterThanThree)).toBe(false)
	})
})
