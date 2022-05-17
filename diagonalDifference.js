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

/* ----------------what do I think I should do to solve this problem
1. the key here is the arr.length property
    a. I determine thee size of the metrix
    b. 3 columns 3 rows

2. I need the first number of first column and first row
    a. arr[0][0] sholuld always make reference to the first number

3. I need the last number:
    a. lastColumn = [arr.length]
    b. (arr[lastCoumn]).length
*/

/*--------what did I learn-----------------
1. find the patterns that help me get to my solution
2. how can i translate this partern to using a loop 
3. what is the best loop i can use for this partern 

4. how important is the .length property
5. what advantages can i get from the .length property like the last index of the array
6. I learned about the abs absolute value. is always positive . is calculated by the distance departing from 0
*/
