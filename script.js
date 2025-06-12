const display = document.querySelector('.display');

let currentInput = '0';
let operator = null;
let previousInput = '';
let resetDisplay = false;

function updateDisplay() {
    display.textContent = currentInput;
}

function handleNumberClick(value) {
    if (resetDisplay) {
        currentInput = value;
        resetDisplay = false;
    } else if (currentInput === '0' && value != '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function handleOpClick(op) {
    if (operator && !resetDisplay) {
        calculateResult();
    }
    previousInput = currentInput;
    operator = op;
    resetDisplay = true;
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert('Cannot divide by zero!');
                clearAll();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    if (result.toString().includes('.') && result.toString().split('.')[1].length > 4) {
        currentInput = result.toFixed(4).toString();
    } else {
        currentInput = result.toString();
    }
    operator = null;
    previousInput = '';
    resetDisplay = true;
    updateDisplay();
}

function clearAll() {
    currentInput = '0';
    operator = null;
    previousInput = '';
    resetDisplay = false;
    updateDisplay();
}

// Set up buttons
const numberPad = document.querySelector('.number-pad');

for (let i = 0; i < 10; i++) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.classList.add('number-button');
    button.textContent = i;
    button.addEventListener('click', () => {
        const btnValue = button.textContent;
        handleNumberClick(btnValue);
    })
    numberPad.appendChild(button);
};

const button = document.createElement('button');
button.classList.add('button');
button.classList.add('number-button');
button.textContent = '.';
button.addEventListener('click', () => {
    handleNumberClick('.');
})
numberPad.appendChild(button);

const operatorsPad = document.querySelector('.operators-pad');

const addButton = document.createElement('button');
addButton.classList.add('button');
addButton.classList.add('operator-button');
addButton.textContent = '+';
addButton.addEventListener('click', () => {
    handleOpClick('+');
});
operatorsPad.appendChild(addButton);

const subtractButton = document.createElement('button');
subtractButton.classList.add('button');
subtractButton.classList.add('operator-button');
subtractButton.textContent = '-';
subtractButton.addEventListener('click', () => {
    handleOpClick('-');
});
operatorsPad.appendChild(subtractButton);

const multiplyButton = document.createElement('button');
multiplyButton.classList.add('button');
multiplyButton.classList.add('operator-button');
multiplyButton.textContent = '*';
multiplyButton.addEventListener('click', () => {
    handleOpClick('*');
});
operatorsPad.appendChild(multiplyButton);

const divideButton = document.createElement('button');
divideButton.classList.add('button');
divideButton.classList.add('operator-button');
divideButton.textContent = '/';
divideButton.addEventListener('click', () => {
    handleOpClick('/');
});
operatorsPad.appendChild(divideButton);

const equalsButton = document.createElement('button');
equalsButton.classList.add('button');
equalsButton.classList.add('operator-button');
equalsButton.textContent = '=';
equalsButton.addEventListener('click', () => {
    calculateResult();
});
operatorsPad.appendChild(equalsButton);

const clearButton = document.createElement('button');
clearButton.classList.add('button');
clearButton.classList.add('operator-button');
clearButton.textContent = 'C';
clearButton.addEventListener('click', () => {
    clearAll();
});
operatorsPad.appendChild(clearButton);