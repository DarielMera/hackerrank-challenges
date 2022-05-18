// from hacker rank - miniMaxSum


arr = [1,2,3,4,5]

let minOfFour = 0
let maxOfFour = 0
let totalSum = 0

function miniMaxSum(){

    for(let i = 0; i < arr.length; i++){
        totalSum += arr[i]
    }
maxOfFour = totalSum - Math.min(...arr) 
minOfFour = totalSum - Math.max(...arr) 
console.log(minOfFour + " " + maxOfFour)

 }

 console.log(miniMaxSum())
