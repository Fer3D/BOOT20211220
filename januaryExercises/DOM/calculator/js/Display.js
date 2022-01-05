class Display {
    constructor(displayPreviousValue, displayCurrentValue) {
        this.displayPreviousValue = displayPreviousValue;
        this.displayCurrentValue = displayCurrentValue;
        this.calculator = new Calculator();
        this.previousValue = '';
        this.actualValue = '';
    }
}