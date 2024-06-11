// for of

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5];

for (const iterator of arr) {
    // console.log(`Value of iterator: ${iterator}`);
    
}

for (const element of arr) {
    // console.log(`Value of element: ${element}`);
}

const greetings = "Hello World";

for (const char of greetings) {
    // console.log(`Value of char: ${char}`);
}

// Maps

const map = new Map();

map.set("IND", "India");
map.set("USA", "United States of America");
map.set("UK", "United Kingdom");
map.set("AUS", "Australia");

console.log(map);

for (const [key, value] of map) {
    console.log(`Key: ${key} -  Value: ${value}`);
}

const myObject = {
    "game1" : "Cricket",
    "game2" : "Football",
    "game3" : "Basketball",
    "game4" : "Hockey"
};

// for (const [key, value] of Object) {
//     console.log(`Key: ${key} -  Value: ${value}`);
// }

for (const key of Object.keys(myObject)) {
    // console.log(`Key: ${key}`);
}

for (const values of Object.values(myObject)) {
    // console.log(`Value: ${values}`);
}

for (const [key, value] of Object.entries(myObject)) {
    // console.log(`Key: ${key} -  Value: ${value}`);
}