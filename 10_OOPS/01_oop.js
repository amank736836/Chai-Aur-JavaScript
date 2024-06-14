const user = {
    username : "Aman",
    loginCount : 32,
    signedIn : true,
    getUserDetails : function(){
        console.log(`Got user details from database`);
        console.log(`Username is ${this.username}, user has logged in ${this.loginCount} times`);
        console.log(this);
    }
}

const user2 = {
    username : "Aman",
    loginCount : 32,
    signedIn : true,
    getUserDetails : function(){
        console.log(`Got user details from database`);
        console.log(`Username is ${this.username}, user has logged in ${this.loginCount} times`);
        console.log(this);
    }
}

// console.log(user.username);
// user.getUserDetails();

// console.log(this);

// const promiseOne = new Promise();
// const date = new Date();

function User(username , loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Hello ${this.username}`);
    }

    // return this;
}

const userOne = new User("Aman",736,true);
const userTwo = new User("Chai Aur Code",836,true);

console.log(userOne.constructor);
// console.log(userTwo);

console.log(userOne instanceof User);

