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
  

  function calculate() {
    if (firstNumber === null || operator === null) return;
  
    const secondNumber = display.textContent;
    let result;
  
    try {
      switch (operator) {
        case '+': result = parseFloat(firstNumber) + parseFloat(secondNumber); break;
        case '-': result = parseFloat(firstNumber) - parseFloat(secondNumber); break;
        case '×': result = parseFloat(firstNumber) * parseFloat(secondNumber); break;
        case '÷': 
          if (parseFloat(secondNumber) === 0) throw "Cannot divide by zero";
          result = parseFloat(firstNumber) / parseFloat(secondNumber); 
          break;
        case '^': result = Math.pow(parseFloat(firstNumber), parseFloat(secondNumber)); break;
        case '%': result = parseFloat(firstNumber) * (parseFloat(secondNumber) / 100); break;
      }
  
      result = formatResult(result);
      display.textContent = result;
      firstNumber = result;
      resetDisplay = true;
    } catch (error) {
      display.textContent = "Error";
      resetDisplay = true;
      firstNumber = null;
      operator = null;
    }
  }
  
  function formatResult(num) {
    if (num === undefined) return "Error";
    const numStr = num.toString();
    if (numStr.length <= 10) return numStr;
    return num.toExponential(5);
  }
  