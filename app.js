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

let inputData = document.getElementById('user-input');

let remainingChars = document.getElementById('remainingChars');

// Retrieving the maximum allowed characters;
let maxAllowedChars = inputData.maxLength;


function countChars(event) {
    // calculate  characteres on input;
    let inputValue = event.target.value;
    let charsLength = inputValue.length;
    let charsRemaining = maxAllowedChars - charsLength;

    // updating Remaining characters
    remainingChars.textContent = charsRemaining;
}

inputData.addEventListener('input', countChars);