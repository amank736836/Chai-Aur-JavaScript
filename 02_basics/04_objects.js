const tinderUser = new Object();

tinderUser.id = "736836";
tinderUser.name = "Aman";
tinderUser.age = 22;
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "amankarguwal@gmail.com",
    fullname : {
        userfullname:{
            firstname : "Aman",
            lastname : "Kargwal"
        }
    },
    age : 22,
    location : "India",
    isLoggedIn : false ,
    lastLoginDays : ['Monday', 'Wednesday'],
    greeting : function(){
        console.log(`Hello, This is my Name -> ${this.fullname.userfullname.firstname}`);
    },
    greetingTwo : function(){
        console.log(`Hello, This is my full name -> ${this.fullname.userfullname.firstname} ${this.fullname.userfullname.lastname}`);
    }    
};

// console.log(regularUser);
// console.log(regularUser.fullname.userfullname?.firstname);

const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "a",
    4 : "b"
}

const obj3 = {
    5 : "a",
    6 : "b"
}

// console.log(obj1); // {1: "a", 2: "b"}
const obj4 = { obj1 , obj2 } // {obj1: {1: "a", 2: "b"}, obj2: {3: "a", 4: "b"}}
// console.log(obj4);
const obj5 = Object.assign({} , obj1 , obj2 , obj3); // {1: "a", 2: "b", 3: "a", 4: "b", 5: "a", 6: "b"}
// console.log(obj5);
const obj6 = {...obj1 , ...obj2 , ...obj3}; // {1: "a", 2: "b", 3: "a", 4: "b", 5: "a", 6: "b"}
// console.log(obj6);

const users = [
    {
        name : "Aman",
        age : 22,
        location : "India",
        isLoggedIn : false
    },
    {
        name : "Aman",
        age : 22,
        location : "India",
        isLoggedIn : false
    },
    {
        name : "Aman",
        age : 22,
        location : "India",
        isLoggedIn : false
    }
];

// console.log(users[1]['name']);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));
// console.log(tinderUser.hasOwnProperty('fullname'));

const course = {
    coursename: "js in hindi",
    courseprice: 999,
    courseauthor: "Aman",
}

// course.courseauthor 

const {courseauthor : author } = course

// console.log(author);

const navbar = ({company : c}) => {
    console.log(c);
}

// navbar({company:"AK"});

// {
//     "name" : "Aman",
//     "coursename" : "js in hindi",
//     "courseprice" : 999,
// }

// [
//     {},{},{},{}
// ]

