// Array.prototype.yaar = function(){
//     console.log("Helloow!!")
// }

// Array.yaar()


let myName = "shreyas       "

console.log(myName.trim().length);
// console.log(myName.trueLength);`

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.shreyas = function(){
    console.log(`Shreyas is present in all object`);
}
heroPower.shreyas()



Array.prototype.heyShreyas = function(){
    console.log(`Shreyas says hello`);
}

myHeroes.shreyas()

myHeroes.heyShreyas()

// heroPower.heyShreyas() //TypeError: heroPower.heyShreyas is not a function 

const User = {
    namee: "Chai",
    email:"chai@examle.com"
}

const Teacher = {
    makeVideo: true 
}

const TeachingSupport = {
    isAvalable: true

}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__ : TeachingSupport
} 

Teacher.__proto__ = User

// Modern syntax
// .setPrototypeOf() = Sets the prototype of a specified object o 
// to object proto or null. Returns the object o.

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsernaame = "Chai aur Code"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`);
}

anotherUsernaame.trueLength()
"HSreyas".trueLength()
"iceTea".trueLength()