//  creating promises
// const promiseOne = new Promise(function(resolve, reject){

/*Creates a new Promise.

@param executor -> (function(resolve, reject))
A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used 
to resolve the promise with a value or the result of another promise, and a reject callback used to reject 
the promise with a provided reason or error.*/


// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is completed');
//         resolve()
//     },1000)
// })

// // consuming promises
// promiseOne.then(function(){ //.then is related with resolve 
//     console.log("Promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//     console.log("Async task two");
//     resolve()
//     },1000)

// }).then(function(){
//     console.log("Async task two is resolved");
// })

// //data passing in promise
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//     resolve({username:"Chai", email:"chai@example.com"})
//     },1000)
    
// })

// promiseThree.then(function(user){
//     console.log(user);
// })



// user of reject and chaining of then, .catch
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        
        if(!error){
            resolve({myName:"Shreyas", password:"123"})
        }
        else{
            reject('ERROR : Something went wrong')   //reject ka mtlb hi error code hai
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.myName             //chaining of then - jo pehle wale .then me return hoga vo next wale .then me pass hoga
}).then((username)=>{              // very useful in database connection
    console.log(username);
}).catch((err)=>{        // jaise resolve aur then hai vaise hi reject aur catch() hai
    console.log(err)     //  .i.e. err = ERROR : Something went wrong 
}).finally(()=> console.log(("The Promise is either resolved OR rejected")))



// using async await and try catch
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        
        if(!error){
            resolve({myName:"Javascript", password:"123"})
        }
        else{
            reject(' JS went wrong')   //reject ka mtlb hi error code hai
        }
    },1000)
})


async function consumingPromiseFive(){
    try {
        const response = await promiseFive 
        console.log(response); 
    } catch (error) {
        console.log(error);
    }
}

consumingPromiseFive()


// 
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()  //string to json
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
        
//     }
// }

// getAllUsers()

//  isko hi aise bhi kr sakte 
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error => console.log(error)))