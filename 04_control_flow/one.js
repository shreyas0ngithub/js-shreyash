// if{
//      }
// else{
// }

const isUserLoggedin = true

if(isUserLoggedin){

}

// // <,>,<=,>=,==,!=,===(strictly equal data type also same), !==
// //(2 == "2") is true but (2==="2") is false

// const score = 200
// if(score>100){
//     /*const power = "fly"*/ var power = "fly"
//     console.log(`User power: ${power}`)
// }
// console.log(`User Power: ${power}`)


const balance = 1000
if(balance >500)  console.log("test")        //implicit scope
//also
// if(balance >500)  console.log("test") ,
// console.log("test2")       // ->' ,' lagakr multile lines likh sakte hai pr vo readable nahi hai 

// if(balance < 500) {
//     console.log("less than 500")
// }
// else if(balance < 750){
//     console.log("less than 750")
// } else if ( balance <900) {
//     console.log("less than 900")
// } else {
//     console.log("less than 1200")
// }


const loginUser = true
const debitCard = true
const loginFromGoogle = false
const loginFromEmail = true

if(loginUser && debitCard ){                       // && is AND
    console.log("Allowed to buy course")
}

if(loginFromEmail || loginFromGoogle) {           // || is OR
    console.log ("User logged in.")
}