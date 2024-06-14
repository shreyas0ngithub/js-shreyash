//const tinderUser = new Object()  //singleton object
const tinderUser = {} //not a singleton obj 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedin = false

// console.log(tinderUser)


const regularUser = {             //nested objects
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shreyas",
            lastname : "shastrakar"
        }
    }
}

//console.log(regularUser.fullname?.userfullname.firstname)  // ? is optional, it is used to confirm if key is present 
                                                           //is present in the object or not
//combining objects
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj4 = {5:"a",6:"b"}

//const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2,obj4)   //assigns values of ob1,obj2,obj4(source objects) to {}-> target obj

const obj3 = {...obj1, ...obj2}
//console.log(obj3)

//how values in objects come from database
const Users = [{
    id: 1,
    email: "s@gmail.com"
},
{
    id: 21,
    email: "s@gmail.com"
},
{
    id: 13,
    email: "s@gmail.com"
},{
    id: 41,
    email: "s@gmail.com"
},{
    id: 51,
    email: "s@gmail.com"
},{
    id: 61,
    email: "s@gmail.com"
},{
    id: 1,
    email: "s@gmail.com"
}]

console.log(Users[1].email)


//console.log(Object.keys(tinderUser))   //array of all keys
//console.log(Object.values(tinderUser))   //array 0f all values
//console.log(Object.entries(tinderUser))     //array pf all key-value pairs

// console.log(tinderUser.hasOwnProperty('isLoggedin'))


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Destructuring objects

// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }
 
// course.courseInstructor
//const {courseInstructor} = course  //better to use for multiple console.log
//console.log(courseInstructor)

//also
// const {courseInstructor : Instructor} = course
// console.log(Instructor) 

//json
// {
//     "name" :"shreyas",
//     "coursename" : "js in hindi",
//     "cost" : "free"
// }

//api iin array form


