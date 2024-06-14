// Memory 

//Stack(Primitive)  Heap(Non-Primitive)

let myOriginalName = "Shreyas"
                                           //copy of value is passed in case of stack(primitive) values
let anotherName = "johnwick"
anotherName = myOriginalName

// console.log(myOriginalName)
// console.log(anotherName)

let userOne = {               //object definition syntax
    email: "user@google.com",
    userId: 1001
}
                                             //reference(address) is passed in case of heap(non primitive) values
let userTwo = {
    email : "shreyas@google.com",
    userId : 1002
}

console.log(userOne.email)

userOne.email = userTwo.email

console.log(userOne.email)
console.log(userTwo.email)
