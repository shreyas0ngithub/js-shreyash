// const userEmail = "shreyas@gmail.com"
// const userEmail = ""   //empty string(false)
const userEmail = []  //empty array(true)



if(userEmail){
    // console.log("got user email")
} else{
    // console.log("Don't have user email ")
}


// falsy values (values that are assumed to be false)
// => false, 0, -0(neg zero), BigInt 0n, "", null, undefined, Nan(not a number)

//truthy values (values that are assumed to be true)
// =>"0", 'false', " ", [], {}empty obj, function(){}empty function)

if(userEmail.length === 0){
    // console.log("Array is empty")
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    // console.log("Object is empty")
}

/********************************************************************************** */
//Nullish Coalescing Operator(??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
// val1  = null ?? 10 ?? 20

console.log(val1)

/********************************************************************************** */
// Ternary Operator 

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ?  console.log("more than 80") : console.log("less than 80")