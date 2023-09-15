// document.body.children[1].children[0].href = 'https://google.com';
// let anchorElement = document.getElementById('external-link');
// anchorElement.href = 'https://google.com';

// anchorElement = document.querySelector('a');
// anchorElement.href = 'https://facebook.com';
let headerElement = document.body.children[0];
headerElement = document.body.firstElementChild;
console.dir(headerElement);

console.dir(headerElement.parentElement);

console.dir(headerElement.nextElementSibling);
let heading = document.getElementById('firstTitle');
heading.innerHTML = 'Game on';

// let selection = document.querySelector('p');
// console.dir(selection);

// let changer = document.querySelector('#temporary');
// changer.textContent = 'New Paragraph';

let tempElement = document.createElement('a');
tempElement.href = 'https://google.com';
tempElement.textContent = 'another link';



let checkElement = document.querySelector('p');
checkElement.append(tempElement);

//removing the H2 element 

let Remover = document.querySelector('h2');
// Remover.remove();
Remover.parentElement.removeChild(Remover);
checkElement.parentElement.append(checkElement);
checkElement.innerHTML= '<p>new <strong> important</strong> heading</p>';



