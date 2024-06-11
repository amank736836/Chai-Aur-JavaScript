let a = 10;
const b = 20;
var c = 30;

{
    let a = 40;
    const b = 50;
    var c = 60;
    d = 70;
    // console.log("******INNER SCOPE******");
    // console.log(a);
    // console.log(b);
    // console.log(c);
    // console.log(d);
    function hello() {
        console.log("Hello");
    }
}
// hello();
// console.log("******OUTER SCOPE******");

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// console.log("******FOR LOOP******");
for (let index = 0; index < 5; index++) {
    // console.log(index);
}

function one(){
    const username = "Aman";
    function two(){
        const website = "www.amank736836.com";
        console.log(username);
    }
    // console.log(website);

    two();
}

// one();

if(true){
    const username = "Aman";
    if(username === "Aman"){
        const website = "www.amank736836.com";
        // console.log(username + " is a user of " + website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++++++++ interesting +++++++++++++++++++++

function addOne(num){
    return num + 1;
    }
    
console.log(addOne(5));

const addTwo = function(num){
    return num + 2;
    }
    
console.log(addTwo(5));


