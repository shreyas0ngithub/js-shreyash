// immediately invoked function expressions(IIFE)
//why is it used := global scope k pollution(ex. variables) se hone wali problems ko hatane k liye 
// how to: ()()

(function chai(){  //named IIFE
    console.log("DB connected")
})();  //here semicolon is must for next function to be executed
// chai()

( (name) =>  {   //unnamed IIFE
    console.log(`DB connected two ${name}`)
})("shreyas")   //arguments pass to iife