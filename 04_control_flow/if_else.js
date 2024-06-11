
// if

// let condition = true;
// const isUserLoggedIn = true;

// if(isUserLoggedIn){
//     console.log("User is logged in");
// }

// if(condition){

// }

if( 2 == 2 ){
    // console.log("Condition is true");
}

if( 2 == "2" ){
    // console.log("Condition is true");
}
if( 2 === "2" ){
    // console.log("Condition is true");
}
if( 2 !== "2" ){
    // console.log("Condition is true");
}

// if( 3 != 2 ){

// }

// if(!condition){

// }

// 2 <= 2 // true
// < , > , <= , >= , == , != , === , !==

const temperature = 51;

if(temperature <= 50){
    // console.log("Temperature is less than 50");
}else{
    // console.log("Temperature is greater than 50");
}
// console.log("Temperature is " + temperature);

const score = 200;

if(score > 100){
    const power = "fly";
    // console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);

const balance = 1000;

// if(balance > 500)   console.log("You can withdraw money") , console.log("You can withdraw money");
// if(balance > 500)   console.log("You can withdraw money");

if(balance < 500){
    console.log("Balance less than 500");
}
else if(balance < 750){
    console.log("Balance less than 750");
}
else if(balance < 1000){
    console.log("Balance less than 1000");
}
else{
    // console.log("Balance greater than 1000");
}

const userLoggedIn = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = false;
const debitCard = true;

if(userLoggedIn && debitCard && 2==3){
    console.log("Allowed to buy product");
}

if( (loggedInFromGoogle || loggedInFromEmail || true)){
    console.log("User logged in successfully");
}

