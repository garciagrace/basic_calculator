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

let currentOperator = null;
let previousTotal = '';

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    currentDisplay.innerText === '0'
      ? (currentDisplay.innerText = button.innerText)
      : (currentDisplay.innerText += button.innerText);
  });
});

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    currentOperator = button.innerText;
  });
});

allClearButton.addEventListener('click', () => {
  currentOperator = null;
  previousTotal = '';
  currentDisplay.innerText = '0';
});
