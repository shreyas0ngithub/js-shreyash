const namee = "Shreyas"
const lectureCount = 10

console.log(namee + lectureCount + "Value")

//String InterPolation
console.log(/*Backticks ``*/` Hello, my name is ${namee} and i have done ${lectureCount} lectures `)  

const gameName = new String("bgmishreyas")

// console.log(gameName[0])

// console.log(gameName.concat(namee)) //original string didnt6 change

// console.log(gameName.length)
// console.log(gameName.charAt(10))

const newString = gameName.substring(0, 7)
// console.log(newString)

const anotString = "    good    morning    "
// console.log(anotString)

// console.log(anotString.trim())

const url = "https://shreyas.com/shreyas%20shastrakar" 

// console.log(url.replace('%20', '-'))

// console.log(url.includes('shreyas'))

console.log(anotString.split('    '))