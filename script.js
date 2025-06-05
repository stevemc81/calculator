// Operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Calculation
let num1 = 0;
let num2 = 0;
let operator = '+';

function operaate(num1, operator, num2) {
    switch (operator) {
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
    };
};

// Set up buttons
const numberPad = document.querySelector('.number-pad');

for (let i = 0; i < 10; i++) {
    const button = document.createElement('button');
    button.classList.add('number-button');
    button.textContent = i;
    button.addEventListener('click', () => {
        console.log(i);
    })
    numberPad.appendChild(button);
};

const operatorsPad = document.querySelector('.operators-pad');

const addButton = document.createElement('button');
addButton.classList.add('operator-button');
addButton.textContent = '+';
addButton.addEventListener('click', () => {
    console.log('+');
});
operatorsPad.appendChild(addButton);

const subtractButton = document.createElement('button');
subtractButton.classList.add('operator-button');
subtractButton.textContent = '-';
subtractButton.addEventListener('click', () => {
    console.log('-');
});
operatorsPad.appendChild(subtractButton);

const multiplyButton = document.createElement('button');
multiplyButton.classList.add('operator-button');
multiplyButton.textContent = 'X';
multiplyButton.addEventListener('click', () => {
    console.log('X');
});
operatorsPad.appendChild(multiplyButton);

const divideButton = document.createElement('button');
divideButton.classList.add('operator-button');
divideButton.textContent = '/';
divideButton.addEventListener('click', () => {
    console.log('/');
});
operatorsPad.appendChild(divideButton);

const equalsButton = document.createElement('button');
equalsButton.classList.add('operator-button');
equalsButton.textContent = '=';
equalsButton.addEventListener('click', () => {
    console.log('=');
});
operatorsPad.appendChild(equalsButton);

const clearButton = document.createElement('button');
clearButton.classList.add('operator-button');
clearButton.textContent = 'C';
clearButton.addEventListener('click', () => {
    console.log('C');
});
operatorsPad.appendChild(clearButton);