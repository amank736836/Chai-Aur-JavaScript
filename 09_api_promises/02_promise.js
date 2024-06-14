// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => console.log(data))

// fetch('https://jsonplaceholder.typicode.com/posts').then().catch().finally();

// const promiseOne = new Promise(function(resolve , reject){
//     // Do an async task
//     // DB calls , cryptography , network
//     setTimeout(function(){
//         console.log('Async task has completed');
//         resolve();
//     }, 2000);
// });

// promiseOne.then(function(){
//     console.log('Promise Consumed Successfully');
// });

// new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log('Async task 2 has completed');
//         resolve();
//     },2000);
// }).then(function(){
//     console.log('Promise Consumed Successfully');
// });


// const promiseThree = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log('Async task 3 has completed');
//         resolve({username : 'Aman' , email : 'amankarguwal0@gmail.com'});
//     },2000);
// });

// promiseThree.then(function(user){
//     console.log('Promise Consumed Successfully');
//     console.log(user);
// });

// const promiseFour = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             console.log('Async task 4 has completed');
//             resolve({username : 'Aman' , email : 'amankarguwal0@gmail.com'});
//         }else{
//             reject('Error in fetching the data');
//         }
//     },2000);
// });

// const username = promiseFour
// .then(function(user){
//     console.log('Promise Consumed Successfully');
//     console.log(user);
//     return user.username;
// })
// .then(function(username){
//     console.log('Promise Consumed Successfully');
//     console.log(username);
// }).catch(function(error){
//     console.log('Promise Consumed Unsuccessfully');
//     console.log(error);
// }).finally(function(){
//     console.log('Promise is either resolved or rejected');
// });

// console.log(username);

// const promiseFive = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             console.log('Async task 5 has completed');
//             resolve({username : 'Aman' , email : 'amankarguwal0@gmail.com'});
//         }
//         else{
//             reject('Error in fetching the data');
//         }
//     }
//     ,2000);
// });

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive;
//         console.log(response);
//         console.log(typeof response);
//     }catch(error){
//         console.log( 'Error is -', error);
//     }
// }

// consumePromiseFive();

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         // console.log(response);
//         // const data = JSON.parse(await response.text());
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log('Error is -', error);
//     }
// }

// getAllUsers();

fetch('https://api.chucknorris.io/jokes/random')
.then((response)=>response.json())
.then((data)=>console.log(data.value))
.catch((error)=>console.log(error))