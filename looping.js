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

