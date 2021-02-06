import Calculator from './Calculator.js';

export default class CalculatorModel {
  constructor() {
    this.numbers = [];
    this.operation = '';
  }

  setNumbers(num) {
    this.numbers.push(num);
  }

  setOperation(operation) {
    this.operation = operation;
  }

  getOperation() {
    return this.operation;
  }

  getNumbersLength() {
    return this.numbers.length;
  }

  getResult() {
    return new Calculator(this.numbers, this.operation).getOperation();
  }
}
