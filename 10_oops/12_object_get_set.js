const User = {
    _email: "email",
    _password: "password",

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value.toUpperCase();
    },
    get password(){
        return this._password.toUpperCase();
    },
    set password(value){
        this._password = value.toUpperCase();
    }
}

console.log(User.email);
console.log(User.password);
User.email = "aman";
User.password = "1234";
console.log(User.email);
console.log(User.password);

const tea = Object.create(User);
console.log(tea.email);
