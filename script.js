
function appendValue(value) {
    let display = document.calculator.display;
    let current = display.value;
    let lastChar = current.charAt(current.length - 1);

    // Prevent consecutive operators
    if (['+', '-', '*','.','/'].includes(lastChar) && ['+', '-', '*','.', '/'].includes(value)) {
        return;
    }

    display.value += value;
}