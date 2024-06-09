// Primitive

// 7 types : String , Number  , Boolean , Undefined , Null , Symbol (ES6) , BigInt (ES10)

// static => C , C++ , Java
// dynamic => Javascript , Python
// static => data type is fixed
// dynamic => data type is not fixed

const score = 100; // number
const scoreValue = 100.3; // number

const isLoggedIn = false; // boolean
const outsideTemp = null; // null
let userEmail; // undefined

const id = Symbol('123'); // symbol
const anotherId = Symbol('123'); // symbol

// console.log(id === anotherId); // false

const bigNumber = 1234567890123456789012345678901234567890n; // bigint

// console.log(bigNumber);

// Reference (Non-Primitive)

// Arrays , Objects , Functions

const heros = ["shaktiman" , "naagraj" , "doga"]; // array
const user = { // object
    name: "Aman",
    age: 23
};

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber); // bigint
// console.log(typeof outsideTemp); // undefined
// console.log(typeof scoreValue); // number

// console.log(typeof myFunction); // function
// console.log(typeof user); // object
// console.log(typeof anotherId); // symbol

// link to study
// https://262.ecma-international.org/11.0/#sec-11.4.3

