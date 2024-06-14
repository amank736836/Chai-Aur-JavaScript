function User(email,password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, "email",{
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value.toUpperCase();
        }
    });

    Object.defineProperty(this, "password",{
        get: function(){
            return this._password.toUpperCase() + "Aman";
        },
        set: function(value){
            this._password = value.toUpperCase();
        }
    });
}

const chai = new User("chai@chai.com" , "chai");

console.log(chai.email);
console.log(chai.password);
chai.email = "aman";
chai.password = "1234";
console.log(chai.email);
console.log(chai.password);