// let score = 33; // number
// let score = "33abc"; // string
// let score = null; // null
let score = true; // true => 1 | false => 0

// console.log(typeof score); // number | string
// console.log(typeof (score)); // number

let valueInNumber = Number(score);

// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // NaN

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0

// let isLoggedIn = 1;
// let isLoggedIn;
let isLoggedIn = "aman";

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // true

// 0 => false
// 1 => true
// "" => false
// " " => true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber); // "33"
// console.log(typeof stringNumber); // string

// ************************************************************* Operations *************************************************************

let value = 3;
let negativeValue = -value;
// console.log(negativeValue); // -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello";
let str2 = " Aman";

let str3 = str1 + str2;

// console.log(str3); // "Hello Aman"

// console.log("1" + 2); // "12"
// console.log(1 + "2"); // "12"

// console.log(1 + 2 + "2"); // "32"
// console.log(1 + "2" + 2 + 3); // "122"
// console.log("1" + 2 + 2); // "122"

// console.log( ((3 + 4) * 5) % 3); // 2

// console.log(true);
// console.log(+true);
// console.log(-true);

// console.log(-"");
// console.log(+"");

let num1 , num2 , num3;

num1 = num2 = num3 = 2 + 2; // 4

// console.log(num1);
// console.log(num2);
// console.log(num3);

let gameScore = 100;
gameScore++; // 101
// console.log(gameScore);
gameScore--; // 101
// console.log(gameScore);
++gameScore; // 101
--gameScore; // 101
// console.log(gameScore);

// link to study 
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion




