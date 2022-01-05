const previousValue = document.getElementById('previousValue');
const currentValue = document.getElementById('currentValue');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

const calculator = new Calculator;
console.log(calculator.add(2,3));
console.log(calculator.substract(2,3));
console.log(calculator.multiply(2,3));
console.log(calculator.divide(2,3));