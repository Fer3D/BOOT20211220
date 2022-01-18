import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent  {

  constructor() {
    this.displayCurrentValue = displayCurrentValue;
    this.displayPreviousValue = displayPreviousValue;
    this.calculator = new Calculator();
    this.operationType = undefined;
    this.currentValue = '';
    this.previousValue = '';
    this.mathSymbols = {
        add: '+',
        divide: '/',
        multiply: 'x',
        substract: '-',
    }
}

erase() {
    this.currentValue = this.currentValue.toString().slice(0, -1);
    this.printValues();
}

eraseAll() {
    this.currentValue = '';
    this.previousValue = '';
    this.operationType = undefined;
    this.printValues();
}

compute(type) {
    this.operationType !== 'equal' && this.calculate();
    this.operationType = type;
    this.previousValue = this.currentValue || this.previousValue;
    this.currentValue = '';
    this.printValues();
}

attachNumber(number) {
    if (number === '.' && this.currentValue.includes('.')) return
    this.currentValue = this.currentValue.toString() + number.toString();
    this.printValues();
}

printValues() {
    this.displayCurrentValue.textContent = this.currentValue;
    this.displayPreviousValue.textContent = `${this.previousValue} ${this.mathSymbols[this.operationType] || ''}`;
}

calculate() {
    const previousValue = parseFloat(this.previousValue);
    const currentValue = parseFloat(this.currentValue);

    if (isNaN(currentValue) || isNaN(previousValue)) return
    this.currentValue = this.calculator[this.operationType](previousValue, currentValue);
}

}
