// const myNewObj = {username : "username"};

// console.log(Math.PI);

// Math.PI = 3.14;

// console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

// console.log(descriptor);

const chai = {
    name : "ginger chai",
    price : 100,
    isAvailable : true,

    orderChai : function(){
        console.log("Chai is ordered");
    }
}

console.log(chai);


console.log(Object.getOwnPropertyDescriptor(chai, 'price'));

Object.defineProperty(chai, 'price', {
    writable : false,
    enumerable : true,
    configurable : true
});

chai.price = 200;

console.log(chai);
console.log();

for(let [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(key + " - " + value);
    }
    // console.log(key + " - " + value);
}

console.log();

for(let key in chai){
    if(typeof chai[key] !== 'function'){
        console.log(key + " - " + chai[key]);
    }
    // console.log(key + " : " + chai[key]);
}