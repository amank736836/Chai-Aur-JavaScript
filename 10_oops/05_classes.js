// // ES6

// class User{
//     constructor(username , email , password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         // encrypt password
//         return `${this.password}encrypted`
//     }

//     changeUsername(){
//         return this.username.toUpperCase();
//     }
// }

// const chai = new User("Aman", "amankarguwal0@gmail.com" , "amank736836");

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// behind the scene

function User(username , email , password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}encrypted`
}

User.prototype.changeUsername = function(){
    return this.username.toUpperCase();
}

const tea = new User("Aman", "amankarguwal0@gmail.com" , "amank736836");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());