function SetUsername(username){
    //complex DB calls
    this.username = username;
    console.log("called");
    // return this;
}

function createUser(username,email,password){
    SetUsername.call(this , username);
    this.email = email;
    this.password = password;
}

const chai = new createUser("Aman","amankarguwal0@gmail.com","123456");

console.log(chai);