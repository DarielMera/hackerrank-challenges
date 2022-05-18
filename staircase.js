//from hacker rank - StairCase

const n = 6
let symbol = ''
let emptySpace = ' '
let result = null
for(let i = n; i > 0; i--){
   result= emptySpace.repeat(i-1)
    symbol += '#'
    console.log(result + symbol)
}
