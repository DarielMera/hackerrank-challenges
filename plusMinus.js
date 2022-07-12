// from hacker rank - Plus Minus

arr = [1, 1, 0, -1, -1]

function plusMinus(arr) {
	let positiveRatios = 0
	let negativeRatios = 0
	let zeroRatios = 0

	for(let num of arr){
	    if (num === 0) {
	        zeroRatios += 1
	    }

	    if (num < 0) {
	        negativeRatios += 1
	    }

	    if (num > 0) {
	        positiveRatios += 1
	    }
	}

	console.log(negativeRatios)
	console.log(zeroRatios)

	positiveRatios /= arr.length
	negativeRatios /= arr.length
	zeroRatios /= arr.length

	console.log(positiveRatios.toFixed(6))
	console.log(negativeRatios.toFixed(6))
	console.log(zeroRatios.toFixed(6))
}

plusMinus(arr)
