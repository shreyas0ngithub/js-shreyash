//Dates 

let myDate = new Date()
// console.log(myDate)  //2024-06-13T09:57:01.034Z
// console.log(myDate.toString()) //Thu Jun 13 2024 09:57:26 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()) //Thu Jun 13 2024

// console.log(myDate.toLocaleString()) //6/13/2024, 9:58:52 AM
// console.log(myDate.toISOString()) //2024-06-13T09:59:24.119Z
//console.log(typeof myDate)

//let myCreatedDate = new Date(2023, 0 , 19)  YYYY/M/DD , months are from 0-11(jan-dec)
////console.log(myCreatedDate.toDateString())

let myCreatedDate = new Date(2023, 0 , 19, 5, 3)
//console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp)  //miliseconds
// console.log(myCreatedDate.getTime())

let newDate = new Date()

console.log(newDate.toLocaleString('default', {
    weekday: 'long',
    month: "long"
}))

