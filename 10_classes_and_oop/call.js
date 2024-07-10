function sayMYname (username){
    console.log("Called");
    this.username=username
}

function UserDetails (username, email, age){
    
    sayMYname.call(this, username) //SUPER() bhi yehi kaam krta hai
    
    this.email = email,
    this.age = age;

}

const chai = new UserDetails("SHryas", "SHrywas@email.com", 89)
console.log(chai);

