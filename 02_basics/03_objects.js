"use strict";
// singleton
// object create

// object literals

const mySym = Symbol('key1');

const JsUser = {
    name: 'Aman', // string
    "full name": 'Aman Kargwal', // key with space
    mySym2:"mykey1", // normal property
    [mySym]:"mykey1", // computed property
    // mySym , // shorthand property
    age: 22, // number
    location: 'India', // string
    email: 'amankarguwal0@gmail.com', // string
    isLoggedIn: false, // boolean
    lastLoginDays: ['Monday', 'Wednesday'] // array
}

// console.log(JsUser.email);
// console.log(JsUser['email']);

// console.log(JsUser["full name"]);

// console.log(JsUser.mySym2);
// console.log(typeof JsUser.mySym2);
// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);
// console.log(JsUser[mySym]);

JsUser.email = "aman1299.be21@chitkarauniversity.edu.in";
// Object.freeze(JsUser);
JsUser.email = "amankarguwal02@gmail.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello, This is my Name -> ${this.name}`);
};
JsUser.greetingTwo = function(){
    console.log(`Hello, This is my full name -> ${this["full name"]}`);
};

// JsUser.greeting();
console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
