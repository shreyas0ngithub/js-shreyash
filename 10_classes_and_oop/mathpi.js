const descripter = Object.getOwnPropertyDescriptor(Math , "PI")
// console.log(descripter);
/* o/p:{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}*/

Math.PI = 5
// console.log(Math.PI);  //o/p=3.141592653589793


const chai ={
    name: "Ginger chai",
    price: 250,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai, "price"));
// o/p = { value: 250, writable: true, enumerable: true, configurable: true }

// define properties
Object.defineProperty(chai, "price",{
    writable: false,
    enumerable: false
})

// for (let [key, value] of chai) {}    TypeError: chai is not iterable

for (const [key, value] of Object.entries(chai)) {
    console.log(`${key}<=>${value}`);
}

// for loop case 1: chai-price-property->enumerable: true
// o/p: name<=>Ginger chai
//      price<=>250
//      isAvailable<=>true

// for loop case 2: chai-price-property->enumerable: false
// o/p:  name<=>Ginger chai
//       isAvailable<=>true  