const coding =["js","ruby", "java","python","cpp"]

// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item , index, arr) => {
//     console.log(item , index, arr);
// })

const myCoding = [ 
    {
        lang: "Python",
        ext: ".py"
    },
    {
        lang: "Javascript",
        ext: ".js"
    },
    {
        lang: "Cpp",
        ext: ".cpp"
    },
    {
        lang: "c",
        ext: ".c"
    }
]

myCoding.forEach((item)=>{      //each object in mycoding is considered as item in each iteration
    console.log(item.ext);
})
