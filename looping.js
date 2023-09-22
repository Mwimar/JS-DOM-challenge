const calculatorBtn = document.querySelector('#calculator button');



function calculateInputValue() { 
    const userNumberInput = document.getElementById('user-number');
    const enteredNumber = userNumberInput.value;

    let sumUpToNumber = 0;   

    for (let i = 0; i <= enteredNumber; i++){
        sumUpToNumber =sumUpToNumber + i;

        const outputResultElement = document.getElementById('calculated-sum');
        outputResultElement.textContent = sumUpToNumber;
        outputResultElement.style.display = 'block';
        
    }
}

calculatorBtn.addEventListener('click', calculateInputValue);


// for of Loop in changing content of links;
const highlightButton = document.querySelector('#highlight-links button');

const allAnchorElements = document.querySelectorAll('#highlight-links a');

function highlightAnchorElement() {
    
    for (const anchorElement of allAnchorElements) {
        anchorElement.classList.add('highlight');
    }
    
};

highlightButton.addEventListener('click', highlightAnchorElement);


// for in loop for diplaying data in objects

const dummyData = {
    firstName: 'Mark',
    carName: 'G-Wagon',
    moneyType: 'Long'
};

const displayDataButton = document.querySelector('#user-data button');


function displayData() {

    
    const outputData = document.getElementById('output-user-data');
    outputData.innerHTML = "";
    //outputData.textContent = '';

    for (dataItem in dummyData) {
        const createNewElement = document.createElement('li');
        const finalOutputData = dataItem  +" :"+ dummyData[dataItem];
        createNewElement.textContent=finalOutputData;
        outputData.append(createNewElement);     

    }
}

displayDataButton.addEventListener('click', displayData);



//Statistics with While loop

const rollDiceButtonElement = document.querySelector('#statistics button');
const outputListElement = document.getElementById('dice-rolls');

function rollTheDice() {
    return Math.floor(Math.random() * 6)+1;    
}

function numberOfDiceRolls(){
    const targetNumberInput = document.getElementById('user-target-number');
    const enteredNumber = targetNumberInput.value;
    const diceRollsList = document.getElementById('dice-rolls');
    diceRollsList.innerHTML = "";
    
    let NumberofRolls = 0;
    let hasRolled = false;
    while (!hasRolled) {
        const rolledNumber = rollTheDice();
        // if (rolledNumber == enteredNumber) {
        //     hasRolled = true;
        // }

        NumberofRolls++;
        const newRollListElement = document.createElement('li');
        outputText = 'Roll' + " :" + rolledNumber;
        newRollListElement.textContent = outputText;
        outputListElement.append(newRollListElement);
        hasRolled = rolledNumber == enteredNumber;//loop stops after rolled number= entered number

        const outPutTotalRolls = document.getElementById('output-total-rolls');
        const outPutTargetNumber = document.getElementById('output-target-number');

        outPutTargetNumber.textContent = enteredNumber;
        outPutTotalRolls.textContent = NumberofRolls;
     }

}

rollDiceButtonElement.addEventListener('click', numberOfDiceRolls);