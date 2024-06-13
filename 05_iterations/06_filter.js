
// const coding = ['JavaScript', 'Python', 'Java', 'Rust'];

// const values = coding.forEach((language, index) => {
//     console.log(`Index: ${index} - Language: ${language}`);
// });

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 5 );
    
// const newNums = myNums.filter((num) => {
//     return num > 5;
// });

// console.log(newNums);

// const newNums = [];

// myNums.forEach(num => {
//     if(num > 5){
//         newNums.push(num);
//     }
// });

// console.log(newNums);

const books = [
    {title : 'Book 1', author : 'Author 1', genre : 'Genre 1'},
    {title : 'Book 2', author : 'Author 2', genre : 'Genre 2'},
    {title : 'Book 3', author : 'Author 3', genre : 'Genre 3'},
    {title : 'Book 4', author : 'Author 4', genre : 'Genre 4'},
    {title : 'Book 5', author : 'Author 1', genre : 'Genre 1'},
    {title : 'Book 6', author : 'Author 2', genre : 'Genre 2'},
    {title : 'Book 7', author : 'Author 3', genre : 'Genre 3'},
    {title : 'Book 8', author : 'Author 4', genre : 'Genre 4'},
    {title : 'Book 9', author : 'Author 2', genre : 'Genre 1'},
    {title : 'Book 10', author : 'Author 1', genre : 'Genre 2'}
]

// const userBooks = books.filter((book) => book.title.includes('1'));
// const userBooks = books.filter((book) => book.genre === 'Genre 1');
const userBooks = books.filter((book) => book.author == 'Author 1' && book.genre == 'Genre 1');

console.log(userBooks);

