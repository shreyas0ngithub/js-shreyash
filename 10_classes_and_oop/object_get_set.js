const User = {
    _email: "S@ss.com",
    _password: "123456789",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);