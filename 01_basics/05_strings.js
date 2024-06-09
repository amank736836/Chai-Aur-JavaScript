const name = "Aman";
const repoCount = 20;

// console.log(name +" "+ repoCount + " repositories"); // "Aman 20 repositories"

// console.log(`Hello my name is ${name} and I have ${repoCount} repositories`); // "Hello my name is Aman and I have 20 repositories"

const gameName = new String("PUBG");
// console.log(gameName); // String {"PUBG"}

// console.log(gameName[0]); // "P"

// console.log(gameName.__proto__); // String

// console.log(gameName.length); // 4
// console.log(gameName.toUpperCase()); // "PUBG"

// console.log(gameName.charAt(2)); // "B"

// console.log(gameName.indexOf("U")); // 2

const newString = gameName.substring(1,4);
// console.log(newString); // "UBG"

const anotherString = gameName.slice(-1,4);
// console.log(anotherString); // "G"

const newGameName = gameName.replace("PUBG" , "COD");
console.log(newGameName); // "COD"

const newGameName2 = "       FAUG     ";
console.log(newGameName2); // "       FAUG     "
console.log(newGameName2.trim()); // "FAUG"

const newGameName3 = "PUBG";
console.log(newGameName3.split("")); // ["P" , "U" , "B" , "G"]

const url = "https://www.google.com/aman%20kumar";
console.log(url);
console.log(url.replace("%20" , "-"));

console.log(encodeURI(url)); // "https://www.google.com/aman%20kumar"
console.log(decodeURI(url)); // "https://www.google.com/aman kumar"

console.log(url.includes("https")); // true
console.log(url.startsWith("https")); // true
console.log(url.endsWith("kumar")); // true
console.log(url.concat(" is a") + " good"); // "https://www.google.com/aman%20kumar is a good"

console.log(url.split("/")); // ["https:" , "" , "www.google.com" , "aman%20kumar"]