const user = {
    username : "Shreyas",
    mobile:" 1234567890",
    isLoggedIn : true,

    getDetails: function(){
        // console.log("Got details");
        // console.log(`${username}`); //ReferenceError: username is not defined
        console.log(`${this.username}`);
        console.log(this);
    }
}

user.getDetails()
console.log(this);

function User(username, logincount, isLoggedIn){
    this.username = username
    this.logincount = logincount
    this.isLoggedIn = isLoggedIn
    // return this (optional) it is implicitly defined
 }

// const userOne = User("UserOne",12,true)
// const userTwo = User("Chai aur code",11,false)   //values are overwritten over userOne
// console.log(userOne);

// new separate instances
const userOne = new User("UserOne",12,true)
const userTwo = new User("Chai aur code",11,false)   //values do NOT get overwritten over userOne
// console.log(userOne);
console.log(userOne.constructor)
// console.log(userTwo); 