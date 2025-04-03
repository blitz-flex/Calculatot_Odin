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
    } else if (button.classList.contains('operator')) {
        handleOperator(value);
      } else if (value === '=') {
        calculate();
      } else if (value === 'C') {
        resetCalculator();
      } else if (value === '.') {
        addDecimal();
      } else if (value === '⌫') {
        backspace();
      }
  });
});

// Function to handle digit input
function handleDigit(digit) {
  if (display.textContent === '0' || resetDisplay) {
    display.textContent = digit;
    resetDisplay = false;
  } else {
    display.textContent += digit;
  }
}

// Function to handle operator clicks
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
  
// Function to perform calculation
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
      
      // Format result for display
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
  
// Format result to fit display
function formatResult(num) {
    if (num === undefined) return "Error";

    // Convert to string and check length
    const numStr = num.toString();
    if (numStr.length <= 10) return numStr;
    
    return num.toExponential(5);
  }
// Add decimal point
function addDecimal() {
    if (resetDisplay) {
      display.textContent = '0.';
      resetDisplay = false;
      return;
    }
    
    if (!display.textContent.includes('.')) {
      display.textContent += '.';
    }
  }
  