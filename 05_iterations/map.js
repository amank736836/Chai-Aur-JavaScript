const myNumbers = [1, 2, 3, 4, 5];

const changedNums = myNumbers.map((num) => {
    // console.log(num * 2);
    return num * 2;
});

// console.log(changedNums);
// console.log(myNumbers);

const newNums = changedNums
                .map((num) => num * 10 )
                .map((num) => num + 5)
                .filter((num) => num > 30);

// console.log(newNums);




