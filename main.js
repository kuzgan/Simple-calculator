import Caclculator from "./app.js";

const numberButtons = document.querySelectorAll("[number-button]");
const operationButtons = document.querySelectorAll("[operation-button]");
const allClearButton = document.querySelector("#all-clear-button");
const deleteButton = document.querySelector("[delete-button]");
const computeButton = document.querySelector("[compute-button]");
const singChangeButton = document.querySelector("[sign-change-button]");
const previousInputText = document.querySelector(".previous-input");
const currentInputText = document.querySelector(".current-input");

const caclculator = new Caclculator(previousInputText, currentInputText);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    caclculator.appendNumber(button.innerText);
    caclculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    caclculator.selectOperation(button.innerText);
    caclculator.updateDisplay();
  });
});

computeButton.addEventListener("click", () => {
  caclculator.compute();
  caclculator.updateDisplay();
});

allClearButton.addEventListener("click", () => {
  caclculator.clear();
  caclculator.updateDisplay();
});

deleteButton.addEventListener("click", () => {
  caclculator.delete();
  caclculator.updateDisplay();
});

singChangeButton.addEventListener("click", () => {
  caclculator.numberSingChange();
  caclculator.updateDisplay();
});
