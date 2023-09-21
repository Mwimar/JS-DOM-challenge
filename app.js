let paragraphSelector = document.querySelector('p');

function clickListener(event) {
    paragraphSelector.textContent = 'Clicked';
    console.log('Clicked Paragraph');
    console.log(event);
};

//paragraphSelector.addEventListener('click', clickListener);

let checkInput = document.querySelector('#input-data');

function calcUserData(event) {
    // let keyStroke = checkInput.value; similar to the second style. 
    // let keyStroke = event.target.value; substitutes outside variable;
    let keyStroke = event.data; // lixtx indicidual key presses
    console.log(keyStroke);
    // console.log(event);
}

// checkInput.addEventListener('input', calcUserData);

//character counter
//1. getting elements that need to be changed

const inputData = document.getElementById('user-input');

const remainingChars = document.getElementById('remainingChars');

// Retrieving the maximum allowed characters;
const maxAllowedChars = inputData.maxLength;


function countChars(event) {
    // calculate  characteres on input;
    const inputValue = event.target.value;
    const charsLength = inputValue.length;
    const charsRemaining = maxAllowedChars - charsLength;

    // updating Remaining characters
    remainingChars.textContent = charsRemaining;

    if (charsRemaining ===0) {
        remainingChars.classList.add('error');
        inputData.classList.add('error');
        
    } else if (charsRemaining <=15) { 
        remainingChars.classList.add('warning');
        inputData.classList.add('warning');
        remainingChars.classList.remove('error',);
        inputData.classList.remove('error');

    } else {
        remainingChars.classList.remove('warning');
        inputData.classList.remove('warning',);
                
    }
}

inputData.addEventListener('input', countChars);

remainingChars.style.fontSize = '1rem';


const spanElement = document.getElementById('remainingChars');
//spanElement.className = 'warning'; adding  a new class using className or overite existing class

spanElement.classList.add('warning'); //adding a new class without overwriting existing class
spanElement.classList.remove('warning') // removing the new class without overwriting existing class




let isLoggedIn = false;
if (!isLoggedIn) {
    console.log("user not logged in!")
}