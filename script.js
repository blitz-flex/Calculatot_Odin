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
          handleOperator(button.id, value);
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

    function handleDigit(digit) {
      if (display.textContent === '0' || resetDisplay) {
        display.textContent = digit;
        resetDisplay = false;
      } else {
        display.textContent += digit;
      }
    }

    function handleOperator(buttonId, op) {
      // Special handling for power operation (x²)
      if (buttonId === 'power') {
        const current = parseFloat(display.textContent);
        const result = Math.pow(current, 2);
        display.textContent = formatResult(result);
        firstNumber = null;
        operator = null;
        resetDisplay = true;
        return;
      }

      if (firstNumber === null) {
        firstNumber = display.textContent;
        operator = op;
        resetDisplay = true;
      } else if (resetDisplay) {
        operator = op;
      } else {
        calculate();
        if (display.textContent !== "Error") {
          operator = op;
          resetDisplay = true;
        }
      }
    }

    function calculate() {
      if (firstNumber === null || operator === null) return;

      const secondNumber = display.textContent;
      let result;

      try {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);

        switch (operator) {
          case '+': 
            result = num1 + num2; 
            break;
          case '-': 
            result = num1 - num2; 
            break;
          case '×': 
            result = num1 * num2; 
            break;
          case '÷': 
            if (num2 === 0) {
              throw new Error("Cannot divide by zero");
            }
            result = num1 / num2; 
            break;
          case '%': 
            result = num1 * (num2 / 100); 
            break;
          default:
            throw new Error("Invalid operator");
        }
        
        result = formatResult(result);
        display.textContent = result;
        firstNumber = result.toString();
        resetDisplay = true;
      } catch (error) {
        display.textContent = "Error";
        resetDisplay = true;
        firstNumber = null;
        operator = null;
      }
    }

    function formatResult(num) {
      if (num === undefined || isNaN(num)) return "Error";

      // Handle very large or very small numbers
      if (Math.abs(num) > 1e10 || (Math.abs(num) < 1e-6 && num !== 0)) {
        return num.toExponential(5);
      }

      // Round to avoid floating point precision errors
      const rounded = Math.round(num * 1e10) / 1e10;
      const numStr = rounded.toString();
      
      if (numStr.length <= 10) {
        return numStr;
      }
      
      return num.toExponential(5);
    }

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

    function backspace() {
      if (resetDisplay) {
        return;
      }
      
      const current = display.textContent;
      if (current.length > 1) {
        display.textContent = current.slice(0, -1);
      } else {
        display.textContent = '0';
      }
    }

    function resetCalculator() {
      display.textContent = '0';
      firstNumber = null;
      operator = null;
      resetDisplay = false;
    }

    // Improved keyboard support
    document.addEventListener('keydown', (event) => {
      event.preventDefault(); // Prevent default browser behavior
      const key = event.key;
      
      if (/[0-9]/.test(key)) {
        handleDigit(key);
      } else if (key === '+') {
        handleOperator('add', '+');
      } else if (key === '-') {
        handleOperator('subtract', '-');
      } else if (key === '*') {
        handleOperator('multiply', '×');
      } else if (key === '/') {
        handleOperator('divide', '÷');
      } else if (key === '%') {
        handleOperator('percent', '%');
      } else if (key === '.' || key === ',') {
        addDecimal();
      } else if (key === '=' || key === 'Enter') {
        calculate();
      } else if (key === 'Escape' || key === 'c' || key === 'C') {
        resetCalculator();
      } else if (key === 'Backspace') {
        backspace();
      }
    });