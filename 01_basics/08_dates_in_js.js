//Dates 

let myDate = new Date()
//console.log(myDate)
//console.log(myDate.toString())
//console.log(myDate.toDateString())

//console.log(myDate.toLocaleString())
//console.log(myDate.toISOString())
//console.log(typeof myDate)

//let myCreatedDate = new Date(2023, 0 , 19)  //YYYY/M/DD , months are from 0-11(jan-dec)
//console.log(myCreatedDate.toDateString())

let myCreatedDate = new Date(2023, 0 , 19, 5, 3)
console.log(myCreatedDate.toLocaleString())