// var c = 300
let a = 100        //global scope
if (true){
    let a = 10
    const b = 20
    //console.log("INNER:",a) //block scope
}

//console.log(a)
// console.log(b)
// console.log(c)

function one()
{
    const username = "shreyas0"

    function two(){
        const website  = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}

// one()

if (true){
    const username = "shreyas"
    if(username === "shreyas"){
        const website = " youtube"
        // console.log(username+website)
    }
    //console.log(website)  ERROR
}
//console.log(username)   ERROR



//*************************************INTERESTING**************************************** */

//technique 1
console.log(addOne(5))

function addOne (num){
    return num+1
}


//technique 2 (aka expression)
//console.log(addTwo(5))  ERROR -ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num+2
}
console.log(addTwo(5)) 


