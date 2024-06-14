//Singleton - one of its type
// Object.create


 //objects literals

/*symbol in object*/ 

const mySym = Symbol()             //to declare a symbol in an object 
console.log(mySym);                                                             //use [] for key of symbol
 const Jsuser = {                                            // otherwise symbol in object will be treated as
    name : "shreyas",         //key : value pair             //normal string like other key value pairs
    "full name" : "Shreyas Shatrakar",
    [mySym] : "myKey1", //sumbol declaration
    age : 10,
    location : "Nagpur",
    email: "shreyas@google.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday","SaturDay"]
}

//accesing object contents
//console.log(Jsuser.email)
//console.log(Jsuser["email"])   // jsuser[email]  is wrong

//console.log(Jsuser["full name"])  //Jsuser.fullname is wrong

//change values
Jsuser.email = "shreyas@chatgpt.com"
//Object.freeze(Jsuser)   //freeze object(cant be changed)
Jsuser.email = "shreyas@microsoft.com"
//console.log(Jsuser)

//adding a function
Jsuser.greeeting = function(){       //object must not be freezed
    console.log("Hello JS users")
}
Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(Jsuser.greeeting)
console.log(Jsuser.greeeting())
console.log(Jsuser.greetingTwo())




