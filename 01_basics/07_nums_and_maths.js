const score = 500

const balance = new Number(100)
// console.log(balance)   //[Number: 100]
////console.log(score)

// console.log(balance.toString())

////console.log(balance.toString().length)

////console.log(balance.toFixed(2)) // decimal k bad two digits

const otherNumber = 116.53246


////console.log(otherNumber.toPrecision(3))

const hunderds = 1000000

////console.log(hunderds.toLocaleString())

////console.log(hunderds.toLocaleString('en-IN'))

//************************Math ***************************

//console.log(Math)

//console.log(Math.abs(-4.2))

//console.log(Math.round(3.3654))
//console.log(Math.ceil(4.1))
//console.log(Math.floor(4.98))
//console.log(Math.min(3,5,6,2,9))

console.log(Math.random())  //always gives values between 0 and 1 
console.log((Math.floor(Math.random())*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min ) //(max-min+1) tells range and +1 for non zero and +min for minimum value 