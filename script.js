// Function to append values to the display
function append(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Function to calculate the square of the current number
function square() {
    const display = document.getElementById('display');
    let value = display.value;
    if (value) {
        // Parse the value and square it
        display.value = Math.pow(parseFloat(value), 2);
    }
}

// Function to calculate the result of the entered expression
function calculate() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression entered in the display
        display.value = eval(display.value);
    } catch (error) {
        // Display 'Error' if the expression is invalid
        display.value = 'Error';
    }
}

// Function to clear the display
document.getElementById('all-clear').addEventListener('click', () => {
    document.getElementById('display').value = '';
});
