//const tinderUser = new Object()
const tinderUser = {} //singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedin = false

//console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shreyas",
            lastname : "shastrakar"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj4 = {5:"a",6:"b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2,obj4)

const obj3 = {...obj1, ...obj2}
//console.log(obj3)


const Users = {
    id: 1,
    email: "s@gmail.com"
}

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedin'))


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Destructuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
 