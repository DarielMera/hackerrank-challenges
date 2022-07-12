// from hacker rank - diagonalDifference

let arr = [
	[1, 2, 2],
	[4, 2, 6],
	[2, 8, 9],
]

function diagonalDifference(arr) {
	let addFirstD = 0
	let addSecondD = 0
	let subFirstDMinusSecondD = 0

	for (let i = 0; i < arr.length; i++) {
		addFirstD += arr[i][i]
		addSecondD += arr[i][(arr.length - 1) - i]
	}

	subFirstDMinusSecondD = addFirstD - addSecondD

	return Math.abs(subFirstDMinusSecondD)
}

console.log (diagonalDifference(arr))
