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