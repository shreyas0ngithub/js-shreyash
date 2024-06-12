//reduce()

const myNums = [1,2,3]

// const myTest = myNums.reduce(function(acc, currval){
//     console.log(`acc ${acc} currval ${currval}`);
//     return acc + currval
// }, 0)

const myTest = myNums.reduce((acc,currval)=>acc+currval,0)
// console.log(myTest);

const shoppingCart = [
    {
        itemname:"JS course",
        price: 2999
    },
    {
        itemname:"py course",
        price: 4999
    },
    {
        itemname:"DSA course",
        price: 6999
    },
    {
        itemname:"webdev course",
        price: 21999
    }
]

const totalSum = shoppingCart.reduce( (acc, currvalue) => acc + currvalue.price ,0)
console.log(totalSum);
