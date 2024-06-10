const marvel_heros = ['thor' , 'ironman' , 'captain america'];
const dc_heros = ['batman' , 'superman' , 'flash'];
marvel_heros.push(dc_heros);

// console.log(marvel_heros); // ['thor' , 'ironman' , 'captain america' , ['batman' , 'superman' , 'flash']]

// console.log(marvel_heros[3][1]); // ['batman' , 'superman' , 'flash']

marvel_heros.pop();
// console.log(marvel_heros); // ['thor' , 'ironman' , 'captain america']

const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros); // ['thor' , 'ironman' , 'captain america' , 'batman' , 'superman' , 'flash']

const all_new_heros = [...marvel_heros , ...dc_heros];
// console.log(all_new_heros); // ['thor' , 'ironman' , 'captain america' , 'batman' , 'superman' , 'flash']

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
// console.log(another_array); // [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// console.log(another_array.flat()); // [1,2,3,4,5,6,7,6,7,[4,5]]
const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array); // [1,2,3,4,5,6,7,6,7,4,5]

// console.log(Array.isArray("Aman"));  // false
// console.log(Array.from("Aman")); // ['A','m','a','n']
// console.log(Array.from({name : 'Aman'})); // [] // Array.from() only works with array like objects // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); // [100,200,300]
