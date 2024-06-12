const titleid = document.getElementById('title');

titleid.style.backgroundColor = "green";

console.log(titleid);
console.log(titleid.id);
console.log(titleid.class);
console.log(titleid.className);

const titleclass = document.getElementsByClassName('heading');

console.log(titleclass);

// titleid.setAttribute('class', 'test');
// titleid.setAttribute('class', 'test heading');

titleid.style.borderRadius = '100px';
titleid.style.padding = '10px';

console.log(titleid.innerText);
console.log(titleid.textContent);
console.log(titleid.innerHTML);

const h2first = document.querySelector('h2');

console.log(h2first);

const input = document.querySelector('input[type="password"]');

console.log(input);

const myul = document.querySelector('ul');

console.log(myul);

const turnGreen = myul.querySelector('li');

turnGreen.style.backgroundColor = 'green';

turnGreen.innerText = 'Green';

const myli = document.querySelectorAll('li');

console.log(myli);

myli[1].style.backgroundColor = 'red';

// const myArr = [...myli];

// console.log(myArr);

// myArr.map((item) => {
//     item.style.backgroundColor = 'blue';
//     item.innerText = 'Blue';
// });

myli.forEach(function(li,index){
    if(index%2 == 0){
        li.style.backgroundColor = 'blue';
    }else{
        li.style.backgroundColor = 'red';
    }
})


const tempClassList = document.getElementsByClassName('list-item');

console.log(tempClassList);

// Array.from(tempClassList).forEach(function(item){
//     console.log(item);
//     item.style.backgroundColor = 'grey';
// });

const myConvertedArray = Array.from(tempClassList);

myConvertedArray.forEach(function(item){
    console.log(item);
    item.style.backgroundColor = 'grey';
});

