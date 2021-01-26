const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const positiveNegativeButton = document.querySelector(
  '[data-positive-negative]'
);
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousDisplay = document.querySelector('[data-previous]');
const currentDisplay = document.querySelector('[data-current]');

let previousTotal = 0;
let operator = '';
let currentNumber = '';

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function compute() {
  if (previousDisplay.innerText !== '') {
    let computation;

    switch (operator) {
      case '÷':
        computation = previousTotal / Number(currentNumber);
        break;
      case '×':
        computation = previousTotal * Number(currentNumber);
        break;
      case '+':
        computation = previousTotal + Number(currentNumber);
        break;
      case '-':
        computation = previousTotal - Number(currentNumber);
        break;
    }

    if (!isFinite(computation)) {
      computation = 0;
    }

    previousTotal = computation;
  } else {
    previousTotal = Number(currentNumber);
  }
  currentDisplay.innerText = previousTotal;
}

function updateDisplay() {
  previousDisplay.innerText += ` ${currentNumber} ${operator}`;
  currentNumber = '';
}

function clear() {
  operator = null;
  previousTotal = 0;
  currentNumber = '';
  previousDisplay.innerText = '';
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
    if (currentNumber !== '') {
      compute();
      operator = button.innerText;
    }
    updateDisplay();
  });
});

allClearButton.addEventListener('click', () => {
  clear();
  currentDisplay.innerText = '0';
});

equalsButton.addEventListener('click', () => {
  compute();
  clear();
});
