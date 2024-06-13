const array1 = [1, 2, 3, 4];

const initialValue = 0;

const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue );

// console.log(sumWithInitial);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const myTotal = myNums.reduce(function(accumulator, currentValue){
//     console.log(`Accumulator: ${accumulator} - Current Value: ${currentValue}`);
//     return accumulator + currentValue;
// }, 0);

const myTotal = myNums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(myTotal);

const shoppingCart = [
    {
        itemName : 'JavaScript',
        price : 100
    }
    ,
    {
        itemName : 'Python',
        price : 200
    }
    ,
    {
        itemName : 'Java',
        price : 300
    }
    ,
    {
        itemName : 'Rust',
        price : 400
    }
    ,
    {
        itemName : 'C++',
        price : 500
    }
]

const total = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(total);



