'use strict';


function fib() {
	let f1 = 0
	let f2 = 1
	console.log(f1)
	console.log(f2)
	return function() {
		let res
		res = f1 + f2
		f1 = f2
		f2 = res
		console.log(res)
	}
}

const fibonacci = fib()

fibonacci()
fibonacci()
fibonacci()
fibonacci()
fibonacci()
fibonacci()
fibonacci()
fibonacci()
fibonacci()
fibonacci()
