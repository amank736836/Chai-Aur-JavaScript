let randomNumber = parseInt((Math.random() * 100) + 1);

const submitButton = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

// startOver.setAttribute('style', 'display:none');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 0;

let playGame = true;

if(playGame){
    submitButton.addEventListener('click' , function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
    })
}


function validateGuess(guess){
    if(isNaN(guess)) alert('Please Enter a valid Number');
    else if(guess < 1) alert('Please Enter a number more than 1');
    else if(guess > 100) alert('Please Enter a number less than 100');
    else {
        prevGuess.push(guess);
        displayGuess(guess);
        if(numGuess === 11){
            displayMessage(`Game Over , Random numbere was ${randomNumber}`);
            endGame();
        }else{
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess == randomNumber){
        displayMessage("You guessed it right")
        endGame();
    }else if(guess < randomNumber){
        displayMessage("Number is TOOO low")
    }else if(guess > randomNumber){
        displayMessage("Number is TOOO high")
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} - `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    const newGameButton = document.querySelector(`#newGame`);
    newGameButton.addEventListener('click',function(){
        randomNumber = parseInt((Math.random() * 100) + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = ``;
        remaining.innerHTML = `10`;
        userInput.removeAttribute('disabled');
        submitButton.removeAttribute('disabled');
        startOver.removeChild(p);
        displayMessage("Let's Start")
        playGame = true;
    })
}

function endGame(){
    userInput.setAttribute("disabled",'');
    submitButton.setAttribute("disabled",'');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame"> Start new Game </h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}