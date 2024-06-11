// for

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if(element == 5){
//         console.log("Element is 5");
//     }
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop value: ${i}`);
//     for(let j=1;j<=10;j++){
//         // console.log(`inner loop value: ${j}`);
//         console.log(i + '*' + j + '=' + i*j);
//     }
    
// }

let myArray = ["flash" , "batman" , "superman" ];

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// break and continue

for (let index = 0; index < 20; index++) {
    if(index == 5){
        console.log("I am 5");
        // break;
        continue;
    }
    console.log(`value of index: ${index}`);
}