//  creating promises
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000)
})

// consuming promises
promiseOne.then(function(){ //.then is related with resolve 
    console.log("Promise consumed");
})