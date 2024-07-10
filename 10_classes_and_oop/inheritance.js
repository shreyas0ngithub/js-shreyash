class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email  = email
        this.password = password
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com",123)
chai.addCourse()
const MasalaChai = new User("MasalaChai")

// MasalaChai.addCourse() // NO ACCESS - TypeError: MasalaChai.addCourse is not a function
MasalaChai.logMe()

console.log(chai instanceof User);
console.log(chai instanceof Teacher);
console.log(MasalaChai instanceof User);
