// console.log("A");?
// console.log("M");
// console.log("A");
// console.log("N");

function sayMyName(){
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
    return "hello";
}

// console.log(sayMyName());
// sayMyName();

function addTwoNumbers1(number1,number2){
    console.log(number1 + number2);
    // return number1 + number2 - 2;
}

// function addTwoNumbers2(number1,number2){
//     let result = (number1 + number2);
//     console.log("AMAN");
//     return result;
// }

function addTwoNumbers2(number1,number2){
    return number1 + number2;
}


// console.log(addTwoNumbers1(2,4));
// addTwoNumbers1(2,3);
// addTwoNumbers1(2,null);
// addTwoNumbers1(2,undefined);

const result = addTwoNumbers2(2,3);

// console.log("Result : " + result);

function loginUserMessage(username = "Someone"){
    // if(username === undefined){
    //     console.log("Please provide a username");
    //     return "";
    // }
    // if(!username){
    //     console.log("Please provide a username");
    //     return;
    // }
    return `${username} has logged in`;
}

// console.log(loginUserMessage("Aman"));
// console.log(loginUserMessage());

function calculateCartPrice(val1 , val2 , val3 , ...num1){
    return num1;
}

// console.log(calculateCartPrice(200 , 400 , 500 , 2000));

const user = {
    username : "Aman",
    prices:199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price?anyObject.price:99}`);
}

handleObject(user);

handleObject({
    username : "Aman",
    price : 200
})

const myNewArray = [200,400,100,600];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,300,500,600]));


