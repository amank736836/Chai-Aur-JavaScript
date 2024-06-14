class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }

    static createId(){
        return `123`;
    }

}

const Aman = new User("Aman");

// console.log(Aman.createId());
console.log(Aman);

class Teacher extends User{
    constructor(username , email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone","i@phone.com");

console.log(iphone);

iphone.logMe();

// console.log(iphone.createId());
console.log(Teacher.createId());
console.log(User.createId())