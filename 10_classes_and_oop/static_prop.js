class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Usrename: ${this.username}`);
    }

    // createId(){
    static createId(){  //does not give access
        return '1234567890'
    }
}

const shreyas = new User("shrywas")
console.log(shreyas.createId()); // STATIC METHOD : TypeError: shreyas.createId is not a function