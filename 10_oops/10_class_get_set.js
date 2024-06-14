class User {
    constructor(username,password){
        this.username = username;
        this.password = password;
    }

    get username(){
        return this.username.toUpperCase();
    }

    set username(username){
        this._username = username.toUpperCase();
    }

    get password(){
        return this._password.toUpperCase()+"kumar";
    }

    set password(password){
        this._password = password.toUpperCase();
    }

}

const Aman = new User("Aman","1234");
console.log(Aman);
console.log(Aman.username);
console.log(Aman.password);
Aman.username = "AmanKumar";
Aman.password = "123456";
console.log(Aman.username);
console.log(Aman.password);

class User2 {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User2("h@hitesh.ai", "abc")
console.log(hitesh.email);
console.log(hitesh.password);
hitesh.email = "h@.ai";
hitesh.password = "def";
console.log(hitesh.email);
console.log(hitesh.password);
