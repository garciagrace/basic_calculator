const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const positiveNegativeButton = document.querySelectorAll(
  '[data-positive-negative]'
);
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousDisplay = document.querySelector('[data-previous]');
const currentDisplay = document.querySelector('[data-current]');

let previousTotal = 0;
let previousOperator = '';
let currentNumber = '';

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function compute(num, operator) {
  if (previousOperator !== '') {
    switch (operator) {
      case '÷':
        previousTotal /= num;
      case '&times;':
        previousTotal *= num;
      case '+':
        previousTotal += num;
      case '-':
        previousTotal -= num;
    }
  }
  previousOperator = operator;
  currentDisplay.innerText = previousTotal.toString();
}

function updateDisplay(num, operator) {
  previousDisplay.innerText += ` ${num} ${operator}`;
  currentNumber = '';
}

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    currentNumber === ''
      ? (currentNumber = button.innerText)
      : (currentNumber += button.innerText);

    currentDisplay.innerText = formatNumber(currentNumber);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    compute(Number(currentNumber), button.innerText);
    updateDisplay(Number(currentNumber), button.innerText);
  });
});

allClearButton.addEventListener('click', () => {
  currentOperator = null;
  previousTotal = 0;
  previousOperator = '';
  currentNumber = '';
  previousDisplay.innerText = '';
  currentDisplay.innerText = '0';
});
