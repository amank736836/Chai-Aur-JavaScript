// const userEmail = "amankarguwal0@gmail.com"
// const userEmail = ""
const userEmail = []

if(userEmail){
    // console.log("Email is present");
}
else{
    console.log("Email is not present");
}

// falsy values 

// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// truthy values

// true , 1 , -1 , BigInt 1n , [] , {} , "0" , " " , "false" , 'false',
// function(){} , new Date() , new Map() , new Set() , new WeakMap() , new WeakSet(),
// Symbol() , 0.1 , -0.1 , Infinity , -Infinity, 1n , "0" , "false" , "null" , "undefined" , "NaN",
// "0.1" , "-0.1" , "Infinity" , "-Infinity" , "1n" , "true" , "1"

if(userEmail.length === 0){
    // console.log("Email is not present");
}

const emptyObject = {};

if(Object.keys(emptyObject).length === 0){
    // console.log("Object is empty");
}

// console.log(false == 0);
// console.log(false == '');
// console.log(0 == '');

// Nullish Coalescing Operator (??) : It is used to check if a value is null or undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
val1 = undefined ?? 15;

// console.log(val1);

val1 = null ?? 10 ?? 15;

// console.log(val1);

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("I will buy ice tea") : console.log("I will not buy ice tea");

