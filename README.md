# Simple Calculator

## Overview
This project is a fully-functional web calculator built with HTML, CSS, and JavaScript. It features a modern, visually appealing interface with smooth animations and comprehensive calculation capabilities. The calculator is designed for both mouse and keyboard input, making it versatile for different user preferences.

## Features in Detail

### Core Functionality
- **Arithmetic Operations**:
  - Addition (+): Combines two numbers
  - Subtraction (-): Finds the difference between two numbers
  - Multiplication (×): Multiplies two numbers together
  - Division (÷): Divides the first number by the second number
  - Error handling prevents division by zero

- **Advanced Operations**:
  - Percentage (%): Calculates a percentage of a number (first number × second number/100)
  - Exponentiation (^): Raises the first number to the power of the second number

- **Input Management**:
  - Decimal Point (.): Allows for precise decimal input
  - Backspace (⌫): Removes the last entered digit or character
  - Clear (C): Resets the entire calculation and clears the display

- **Result Handling**:
  - Automatic formatting of large numbers using exponential notation
  - Display shows up to 10 digits before switching to scientific notation
  - Error messages for invalid operations

### User Interface

- **Display Panel**:
  - High-contrast text for better readability
  - Right-aligned numbers following calculator conventions
  - Overflow handling with ellipsis for very large numbers
  - Transition effects for smoother display updates

- **Button Layout**:
  - Intuitive 4×5 grid arrangement
  - Color-coded buttons for different function types:
    - Dark gray for numeric digits
    - Orange for operators
    - Red for clear function
    - Green for equals
    - Medium gray for decimal and backspace

- **Visual Effects**:
  - Gradient background on both page and calculator body
  - Subtle hover animations with scale increase (105%)
  - Active state animations with scale decrease (95%)
  - Elevation shadow effects for 3D appearance
  - Lift animation when hovering over the calculator

## Implementation Details

### HTML Structure
The calculator is built with a semantic HTML structure:
```html
<div class="calculator">
  <div class="display">0</div>
  <div class="buttons">
    <!-- Buttons organized in a grid -->
  </div>
</div>
```

- The main container has the class `calculator`
- The display area has the class `display` with ID `display`
- The button container has the class `buttons`
- Each button has appropriate classes:
  - `digit` for number buttons
  - `operator` for operation buttons
  - Other specific IDs like `clear`, `decimal`, `equals`, `backspace`

### CSS Architecture
The stylesheet implements:

- **Layout System**:
  - Grid layout for button arrangement
  - Flexbox for centering the calculator on the page
  - Responsive sizing with appropriate padding and margins

- **Typography**:
  - Sans-serif font stack starting with 'Segoe UI'
  - Optimized font sizes for different elements (28px for display, 20px for buttons)
  - Proper text alignment and overflow handling

- **Colors and Gradients**:
  - Background: Linear gradient from #e0eafc to #cfdef3
  - Calculator body: Gradient from #2a2a2a to #3c3c3c
  - Button colors:
    - Standard buttons: #555 (hover: #777)
    - Operators: #ff8c00 (hover: #ffa733)
    - Clear button: #e63946 (hover: #ff6666)
    - Equals button: #28a745 (hover: #34c759)
    - Special buttons: #6c757d (hover: #8e9eab)

- **Effects and Animations**:
  - Box shadows with specific spread and opacity for depth
  - Transition properties for smooth animations:
    - transform: 0.3s ease for calculator hover
    - background-color: 0.2s ease for buttons
    - transform: 0.1s ease for button press

### JavaScript Functionality

The JavaScript code is organized into well-structured functions:

- **Event Handling**:
  - Event listeners for all buttons
  - Comprehensive keyboard event handling with key mapping
  
- **Core Functions**:
  - `handleDigit(digit)`: Processes numeric input
  - `handleOperator(op)`: Manages operator selection and chaining
  - `calculate()`: Performs the actual calculation based on selected operator
  - `formatResult(num)`: Formats numbers for display, including scientific notation
  - `addDecimal()`: Handles decimal point input with validation
  - `backspace()`: Removes the last character from the display
  - `resetCalculator()`: Resets all calculator variables and display

- **State Management**:
  - Variables track the first operand, operator, and display reset state
  - Logic for chaining multiple operations
  - Display reset management after operations

- **Error Handling**:
  - Try-catch block in calculate function
  - Specific error handling for division by zero
  - Graceful fallback for undefined results

- **Keyboard Integration**:
  - Maps keyboard keys to calculator buttons
  - Support for multiple key options (e.g., Enter or = for equals)
  - Regex testing for numeric input

## Keyboard Support

The calculator supports comprehensive keyboard shortcuts:

| Key | Function |
|-----|----------|
| 0-9 | Number input |
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| / | Division |
| % | Percentage |
| ^ | Exponentiation |
| . or , | Decimal point |
| = or Enter | Calculate result |
| Escape | Clear calculator |
| Backspace | Delete last character |

The implementation cleverly maps each key to the corresponding button element and triggers a click event, ensuring consistent behavior between keyboard and mouse interactions.

## File Structure

- **index.html**: Main HTML document
  - Contains the calculator structure and layout
  - Links to CSS and JavaScript files
  - Sets up the viewport and character encoding

- **style.css**: Comprehensive styling
  - Global styles and body setup
  - Calculator container styling
  - Display panel configuration
  - Button grid and individual button styles
  - Hover and active states
  - Transitions and animations

- **script.js**: Core functionality
  - Variable declarations
  - Event listeners
  - Calculator logic functions
  - Keyboard support implementation
  - Error handling and display formatting

  ## Test App
[Simple Calculator Demo ](https://blitz-flex.github.io/calculatot_odin/)

