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

let productData = document.getElementById('user-input');
let charsRemaining = document.getElementById('remainingChars');

let maxChars = productData.maxLength;


function calRemainingChars(event) {
    let calcInput = event.target.value;
    let enteredText = calcInput.length;

    let balanceChars = maxChars - enteredText;

    charsRemaining.textContent = balanceChars;
}

productData.addEventListener('input', calRemainingChars);