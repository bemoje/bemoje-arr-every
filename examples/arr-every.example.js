import arrEvery from '../src/arr-every'

const arr = [1, 2, 3, 4, 5]

arrEvery(arr, (num) => {
	return num > 0
})
//=> true

arrEvery(arr, (num) => {
	return num > 3
})
//=> false
