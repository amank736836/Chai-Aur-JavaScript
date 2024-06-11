const user = {
    username : "Aman",
    price : 199,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to our website`);
        // console.log(this); 
    }
}

// user.welcomeMessage();
user.username = "Aman Kumar";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "Aman";
//     console.log(this.username);
//     console.log(this);
// }

// chai();

// const chai = function() {
//     let username = "Aman";
//     console.log(this.username);
//     console.log(this);
// }

// chai();

const chai = () => {
    let username = "Aman";
    console.log(this.username);
    console.log(this);
}

chai();

// const addTwo = (num1 , num2) => {
//     return num1 + num2;
// }
// const addTwo = (num1 , num2) => ( num1 + num2 );

const addTwo = (num1 , num2) => ({username : "Aman"});

console.log(addTwo(2,3));

const myArray = [2,3,4,5,6,7,8]

myArray.forEach((element) => {
    element = element + 1;
});

console.log(myArray);
