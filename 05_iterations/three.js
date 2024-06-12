// Array specific loops
// for of loop

const arr = [1,2,3,4,5]

// for (const iterator of object) {
    
// }

for (const num of arr) {
    // console.log(num);
}

// const greetings = "Hello World!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
    
// }


/********************************************************************** */
//  MAPS
//  The Map object holds key-value pairs and remembers the original insertion order of the keys.
//  Any value (both objects and primitive values) may be used as either a key or a value

const map = new Map()
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('FR',"France")
// map.set('IN',"India")
// console.log(map);


for (const [key,value] of map) {
    // console.log(key, ':-',value)
}


// for of on object
const myObject = {
    'game1' : 'NFS',
    'game2' : 'COD'
}

for (const [key, value] of myObject) {
    console.log(key, ':-',value);
}
// TypeError: myObject is not iterable(through for of)


