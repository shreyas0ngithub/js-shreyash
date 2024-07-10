class shreyas{
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    // get password(){
    // return this.password.toUppercase()
    // }
                                        // RangeError: Maximum call stack size exceeded
    // set password(value){
    //     this.password = value
    // }

    get password(){
        return `${this._password.toUpperCase()}`
    }

    set password(value){
        this._password = value
    }

}

const shhh = new shreyas("s@google.com", "123abcd")
console.log(shhh.password);