const displayPreviousValue = document.getElementById('displayPreviousValue');
const displayCurrentValue = document.getElementById('displayCurrentValue');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

const display = new Display(displayPreviousValue, displayCurrentValue)
numberButtons.forEach(button => {
    button.addEventListener('click', () => display.attachNumber(button.innerHTML));
});