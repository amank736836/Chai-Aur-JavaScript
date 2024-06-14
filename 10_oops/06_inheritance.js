class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username , email , password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new Course is Added by ${this.username}`);
    }

}

const chai = new Teacher("Aman","amankarguwal0@gmail.com","123456");

console.log(chai);
chai.logMe();
chai.addCourse();

const masalaChai = new User("masalaChai");

// masalaChai.addCourse();
masalaChai.logMe();

console.log(chai instanceof Teacher);
console.log(chai instanceof User);