// let score = 33; // number
// let score = "33abc"; // string
// let score = null; // null
let score = true; // true => 1 | false => 0

console.log(typeof score); // number | string
console.log(typeof (score)); // number

let valueInNumber = Number(score);

console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0

// let isLoggedIn = 1;
// let isLoggedIn;
let isLoggedIn = "aman";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

// 0 => false
// 1 => true
// "" => false
// " " => true

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber); // "33"
console.log(typeof stringNumber); // string

