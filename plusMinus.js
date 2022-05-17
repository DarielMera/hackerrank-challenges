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

	// for (let i = 0; i < arr.length; i++) {

	// 	if (arr[i] === 0) {
	// 		zeroRatios += 1
	// 	}

	// 	if (arr[i] < 0) {
	// 		negativeRatios += 1
	// 	}

	// 	if (arr[i] > 0) {
	// 		positiveRatios += 1
	// 	}

	// }

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

/* 
- loop trhough the array
- add the numbers that are less than 0
- add the numbers that are greater than zero



1. determine how many positive numbers 
2. devide the number of positive by the total of array
    a. use array.length
3. print the result of dividing the numbers positive, negative and zero
    Print
    Print the ratios of positive, negative and zero values in the array. 
    Each value should be printed on a separate line with 6  digits after the decimal. 
    The function should not return a value.
*/
