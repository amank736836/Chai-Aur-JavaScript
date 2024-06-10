// Dates

let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.toISOString());
// console.log(typeof myDate);

// let myCreatedDate = new Date('2021-08-15');
// let myCreatedDate = new Date(2023,0,23);
let myCreatedDate = new Date('2023-01-23');
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleDateString());
// console.log(myCreatedDate.toTimeString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(myTimeStamp/(1000)));
// console.log(Math.ceil(myTimeStamp/(1000*60*60*60*365)));
// console.log(typeof myTimeStamp);

let newDate = new Date();

console.log(newDate);

console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getMilliseconds());
// console.log(newDate.getTime());
// console.log(newDate.getTimezoneOffset());
// console.log(newDate.getUTCDate());


console.log(`${newDate.getDate()} - ${newDate.getMonth() + 1} - ${newDate.getFullYear()}`);
console.log(newDate.toLocaleDateString());
console.log(`${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`);
console.log(newDate.toLocaleTimeString());

console.log(newDate.toLocaleString('default', {
    weekday: 'long',
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
}));