
function sayMyname(){
    console.log("s")
console.log("h")
console.log("r")
console.log("e")
console.log("y")
console.log("a")
console.log("s")
}

//sayMyname()

// function addTwoNumbers(num1, num2){    // num1 and num2 are parameters 
//     console.log(num1 + num2)
// }


// addTwoNumbers(4, 8)    //4 and 8 are arguments
// addTwoNumbers(4, "8")
// addTwoNumbers(4, "a")

// const result = addTwoNumbers(4, 8)
// console.log(result)

function addTwoNumbers1(num1, num2){    // num1 and num2 are parameters 
    let result = num1 + num2
    return result    //return statement k bad kuch bhi execute nahi hota hai
    //return num1 + num2 is also correct
}
const result = addTwoNumbers1(4, 8)
// console.log("Result :" ,result)

// function loginUserMessage (username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Shreyas"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())    //undefined


function loginUserMessage (username){
    if(!username){                   //i.e. if(username == undefined)
        // console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage())

//default values
//function loginUserMessage (username = "sam"){
//default values are overridden if values are passed

//********************************************************************* */

function calculateCartPrice (val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000))

const user ={
    username: "shreyas",
    price:199
}

function handleObject(anyObject){
    console.log (`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user)

// handleObject({
//     username: "any",
//     price: 399
// })

const myNewArray = [200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([10,30,40]))
