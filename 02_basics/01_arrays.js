// array

const myArr = [1, 2, 3, 4, 5];

// console.log(myArr);
// console.log(myArr[0]);
// console.log(myArr[1]);
// console.log(myArr[2]);
// console.log(myArr[3]);
// console.log(myArr[4]);

const myHeros = ['shaktiman', 'nagraj', 'doga'];

// console.log(myHeros);
// console.log(myHeros[0]);

// Array methods

myArr.push(6);
// console.log(myArr);
myArr.push(7);
// console.log(myArr);
myArr.pop();
// console.log(myArr);

myArr.unshift(0);
myArr.unshift(9);
// console.log(myArr);
// myArr.shift();
myArr.shift();
// console.log(myArr);

// console.log(myArr.length);
// console.log(myArr.includes(3));
// console.log(myArr.includes(8));
// console.log(myArr.indexOf(3));
// console.log(myArr.indexOf(8));

const newArr = myArr.join();
// console.log(typeof newArr);
// console.log(newArr);
// console.log(myArr);
// console.log(newArr.split(','));

// slice , splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3);

console.log("C ",myArr);
console.log(myn2);