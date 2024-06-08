const accountId = 736836;
let accountEmail = "amankarguwal0@gmail.com";
var accountPassword = "password123";
accountCity = "Delhi";
let accountState;

// accountId = 2; // Error: Assignment to constant variable. 
// not allowed  // const variable cannot be reassigned

accountEmail = "aman1299.be21@chitkarauniversity.edu.in";
accountPassword = "amank736836";
accountCity = "Chandigarh";

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

/*

Prefer not to use var
because of issue in block scope and functional scope

because it is function scoped and not block scoped

Use const if the value is not going to change
Use let if the value is going to change

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);