export default class Caclculator {
  constructor (previousInputText, currentInputText, boolean = false) {
    this.previousInputText = previousInputText;
    this.currentInputText = currentInputText;
    this.operationDone = boolean;
    this.clear();
  }

  clear() {
    this.previousNumber = "";
    this.currentNumber = "";
    this.operation = undefined;
  }

  delete() {
    this.currentNumber = this.currentNumber.toString().slice(0, -1);
  }

  compute() {
    if (this.previousNumber === "" || this.currentNumber === "") return;
    
    switch (this.operation) {
      case "+":
        this.currentNumber =
          parseFloat(this.previousNumber) + parseFloat(this.currentNumber);
        this.previousNumber = "";
        this.operationDone = true;
        break;

      case "-":
        this.currentNumber =
          parseFloat(this.previousNumber) - parseFloat(this.currentNumber);
        this.previousNumber = "";
        this.operationDone = true;
        break;

      case "*":
        this.currentNumber =
          parseFloat(this.previousNumber) * parseFloat(this.currentNumber);
        this.previousNumber = "";
        this.operationDone = true;
        break;

      case "÷":
        this.currentNumber =
          parseFloat(this.previousNumber) / parseFloat(this.currentNumber);
        this.previousNumber = "";
        this.operationDone = true;
        break;

      default:
        return;
    }
  }

  appendNumber(number) {
    if (this.operationDone) {
      this.currentNumber = "";
      this.operationDone = false;
    }

    if (number === "." && this.currentNumber.includes(".")) return;

    if (this.currentNumber.toString().lenght >= 20) return;

    if (number === "." && this.currentNumber === "") {
      this.currentNumber = "0.";
      return;
    }

    this.currentNumber = this.currentNumber.toString() + number.toString();
  }

  selectOperation(operator) {
    if (this.currentNumber === "") return;
    if (this.previousNumber !== "") {

      this.compute();
    }

    this.operation = operator;
    this.previousNumber = this.currentNumber + this.operation;
    this.currentNumber = "";
  }

  numberSingChange() {
    if (this.currentNumber === 0) return;

    if (!(this.currentNumber >= 0)) {
      this.currentNumber = Math.abs(parseFloat(this.currentNumber));
      return;
    }

    if (!(this.currentNumber <= 0)) {
      this.currentNumber = -Math.abs(parseFloat(this.currentNumber));
      return;
    }
  }

  updateDisplay() {
    this.currentInputText.innerText = this.currentNumber;
    this.previousInputText.innerText = this.previousNumber;
  }
}
