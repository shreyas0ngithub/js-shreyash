const user = {
    username: "shreyas",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this)

// function chai (){
//     let username = "shreyas"
//     // console.log(this)
//     console.log(this.username)    //this cant be used in such way in functions(unlike objects)
// }
// chai()

const chai = ()=> {
    let username = "shreyas"
    console.log(this)
}
// chai()



//++++++basic arraow function+++++++++
// const addTwo = (num1, num2) =>{
//     return num1+num2
// }
// console.log(addTwo(6, 7))

//implicit return arrow function
//  const addTwo = (num1,num2) => num1 + num2         //return likhne ki zarurat nahi
//  const addTwo = (num1,num2) => return(num1 + num2)   //() braces use kiye to return likhna padega
 
 const addTwo = (num1,num2) => ({username: "shreyas"})    //object return krna hai to () must hai
 
 console.log(addTwo(3, 4))

 