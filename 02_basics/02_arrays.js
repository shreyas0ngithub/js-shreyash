const marvel_heroes = ["thor","hulk","CA"]
const dc_heroes = ["superman","flash","batman"]

//marvel_heroes.push(dc_heroes) adds arrray as a new element

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1]) accessing elements of dc_heroes

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes)

// const all_new_heroes = [...marvel_heroes, ...dc_heroes]  //same as concst
// console.log(all_new_heroes)

// const another_array =  [1,[2,6],[4,[5,8,9],3]]
// const again_a_array = another_array.flat(Infinity) //infinity signifies depth
// console.log(another_array)
// console.log(again_a_array)






console.log(Array.isArray("Shreyas"))
console.log(Array.from("Shreyas"))
console.log(Array.from({namme:"Shreyas"}))   //.return emopty string 


let score1= 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))