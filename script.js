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
let num1 = null;
let num2 = null;
let operator = null;

function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
    };
};

// Set up buttons
const numberPad = document.querySelector('.number-pad');

for (let i = 0; i < 10; i++) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.classList.add('number-button');
    button.textContent = i;
    button.addEventListener('click', () => {
        const btnValue = parseInt(button.textContent);
        updateDisplay(btnValue);
    })
    numberPad.appendChild(button);
};

const operatorsPad = document.querySelector('.operators-pad');

const addButton = document.createElement('button');
addButton.classList.add('button');
addButton.classList.add('operator-button');
addButton.textContent = '+';
addButton.addEventListener('click', () => {
    updateDisplay('+');
});
operatorsPad.appendChild(addButton);

const subtractButton = document.createElement('button');
subtractButton.classList.add('button');
subtractButton.classList.add('operator-button');
subtractButton.textContent = '-';
subtractButton.addEventListener('click', () => {
    updateDisplay('-');
});
operatorsPad.appendChild(subtractButton);

const multiplyButton = document.createElement('button');
multiplyButton.classList.add('button');
multiplyButton.classList.add('operator-button');
multiplyButton.textContent = 'X';
multiplyButton.addEventListener('click', () => {
    updateDisplay('X');
});
operatorsPad.appendChild(multiplyButton);

const divideButton = document.createElement('button');
divideButton.classList.add('button');
divideButton.classList.add('operator-button');
divideButton.textContent = '/';
divideButton.addEventListener('click', () => {
    updateDisplay('/');
});
operatorsPad.appendChild(divideButton);

const equalsButton = document.createElement('button');
equalsButton.classList.add('button');
equalsButton.classList.add('operator-button');
equalsButton.textContent = '=';
equalsButton.addEventListener('click', () => {
    updateDisplay('=');
});
operatorsPad.appendChild(equalsButton);

const clearButton = document.createElement('button');
clearButton.classList.add('button');
clearButton.classList.add('operator-button');
clearButton.textContent = 'C';
clearButton.addEventListener('click', () => {
    clear();
});
operatorsPad.appendChild(clearButton);

// Update display and execute operation
let displayCleared = true;
const display = document.querySelector('.display');

function updateDisplay(char) {
    if (displayCleared) {
        display.textContent = '';
        displayCleared = false;
    }

    if (typeof char === 'string' && num1 === null) {
        clear();
    } else if (typeof char === 'number' && operator === null) {
        display.textContent += char;
        num1 = parseInt(display.textContent);
        console.log(`Num 1: ${num1}`);
    } else if (typeof char === 'string' && operator === null) {
        display.textContent += char;
        operator = char;
        console.log(`Operator: ${operator}`);
    } else {
        display.textContent += char;
        let strChar = char.toString();
        console.log(`strChar: ${strChar}`);
        if (num2 === null) {
            num2 = strChar;
        } else {
            num2 += strChar;
        }
        console.log(`Num 2: ${num2}`);
        num2 = parseInt(num2);
        console.log(num2);
    }

    if (char === '=') {
        console.log('Perform calc');
        console.log(num1);
        console.log(operator);
        console.log(num2);
        display.textContent = '';
        display.textContent = operate(num1, operator, num2);
    }
}

// Clear calculation
function clear() {
    displayCleared = true;
    display.textContent = 0;
    num1 = null;
    num2 = null;
    operator = null;
}