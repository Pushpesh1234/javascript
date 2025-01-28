const marvel_heroes=["Spiderman","Ironman","Thor"]
const dc_heroes=["Batman","Superman","Flash"]
const num=[1,2,3,4,5]
//marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
//const combineHeroes= marvel_heroes.concat(dc_heroes,num);
//console.log(combineHeroes);
// const combineNumHeroes=[...marvel_heroes, ...dc_heroes, ...num]
// console.log(combineNumHeroes)

const new_array=[0,1,2,[4,5,6],7,[6,7,[4,5]]];
const finalNewArray=new_array.flat(Infinity)
// console.log(finalNewArray);


// console.log(Array.isArray("Pushpesh"));
// console.log(Array.from("Pushpesh"));
// console.log(Array.from({name:"Pushpesh"})) //important

let score_1=100;
let score_2=200;
let score_3=300;
console.log(Array.of(score_1,score_2,score_3));
