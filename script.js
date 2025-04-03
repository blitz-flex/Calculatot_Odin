let firstNumber = null;
let operator = null;
let resetDisplay = false;

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (button.classList.contains('digit')) {
      handleDigit(value);
    }
  });
});

function handleDigit(digit) {
  if (display.textContent === '0' || resetDisplay) {
    display.textContent = digit;
    resetDisplay = false;
  } else {
    display.textContent += digit;
  }
}

function handleOperator(op) {
    if (firstNumber === null) {
      firstNumber = display.textContent;
      operator = op;
      resetDisplay = true;
    } else if (resetDisplay) {
      operator = op;
    } else {
      calculate();
      operator = op;
    }
  }
  