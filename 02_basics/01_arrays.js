//Arrays
const myArr = [1,2,3,4,5]
const heroes =["shaktiman","nagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2)

//Array Method

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)          //adds value at start but unefficient for large arrays
// myArr.shift()             //removes value from front
// console.log(myArr.includes(4))   //boolean o/p
// console.log(myArr.indexOf(9))
// console.log(myArr)

// let newArr = myArr.join()   //converts array to string
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)   -> string
// console.log(typeof myArr)

//++++++++++++++++ slice,splice methods

console.log("A",myArr)      //Original Array

const myn1 = myArr.slice(1, 4)  //end range is not included in slice

console.log(myn1)           //sliced array

console.log("B", myArr)     //Array after using slice(reamins intact)

const myn2 = myArr.splice(1, 4)   //end range is included in splice
console.log("C",myArr)       //Array after using splice(spliced elements are removed from original array ) 
console.log(myn2)             //spliced array
