let myName = "Aman     ";
let myChannel = "Amank736836     ";
// console.log(myName.length);
// console.log(myName.trim().length);
// console.log(myChannel.length);
// console.log(myChannel.trim().length);

let myHeros = ["thor" , "spiderman"];

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.aman = function(){
    console.log(`Aman is Present in all Object`);
}

heroPower.aman()
myHeros.aman()
// myChannel.aman()
// myName.aman()

Array.prototype.heyAman = function(){
    console.log(`Hey Aman`);
}

// heroPower.heyAman()
myHeros.heyAman()

const User = {
    name : "Aman",
    email : "amankarguwal0@gmail.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User;

// Modern Syntax

Object.setPrototypeOf(TeachingSupport , Teacher);

console.log(TASupport.makeVideo);

let anotherUsername = "Aman Kumar       ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength();
myName.trueLength();
myChannel.trueLength();

"zebronics".trueLength();
