const myObjects = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift : 'swift by apple'
}

// for (const key in object) {

// }

// for (const key in myObjects) {
//     console.log(`${key} is shortcut or ${myObjects[key]}`);
// }

const programming = ["js","rb","py","java","cpp"]

// for (const key in programming) {
//     console.log(programming[key]);
// }


//  for in on map   (maps are not iterable)
const map = new Map()
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('FR',"France")

for (const key in map) {
    console.log(key);    //no output
}

