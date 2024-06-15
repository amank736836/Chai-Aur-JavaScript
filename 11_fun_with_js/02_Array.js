const myArr = [];
// DebugPrint(myArr);

// continuous , Holey

// SMI (small Integer)
// Packed element
// Double (float , string , function)

const arr2 = [1, 2, 3, 4, 5];
// packed_smi_elements

arr2.push(6.0);
// packed_double_elements

arr2.push('Hello');
// packed_holey_elements
// packed_elements

arr2[10] = 11;
// holey_elements

console.log(arr2);
console.log(arr2.length);
console.log(arr2[7]);

//bound check
// hasOwnProperty(arr2,9)
// hasOwnProperty(arr2.prototype,10)
// hasOwnProperty(Object.prototype,10)

// holes are very expensive in js

const arr3 = [1, 2, 3, 4, 5];

console.log(arr3[2]);
console.log(arr3[8]);

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

// console.log(arr3);
// console.log(arr3);

const arr4 = new Array(3);
// just 3 holes //  HOLEY_SMI_ELEMENTS

arr4[0] = '1'; // HOLEY_ELEMENTS
arr4[0] = '2'; // HOLEY_ELEMENTS
arr4[0] = '3'; // HOLEY_ELEMENTS

const arr5 = [];

arr5.push('1');
arr5.push('2');
arr5.push('3');

const arr6 = [1, 2, 3, 4, 5];

arr6.push(Infinity);

// for , for of , for in , forEach
