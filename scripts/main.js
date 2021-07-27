import { parseString } from "./parser.js";
import { clearAndUndo } from "./clear.js";
import { performOperations } from "./operations.js";

let numbers = document.querySelectorAll(".numbers");
let input = document.querySelector(".input p");
let operators = document.querySelectorAll(".operators");
let clear = document.querySelector(".reset");
let equal = document.querySelector(".equal");
let answer = document.querySelector(".answer");
let undo = document.querySelector("#clear");

let resultView = false;

/**
 * Change display text size on length change
 * @param {object} input Text content of input
 * @param {number} len Length of string
 */
const changeDisplaySize = (input, len) => {
  if (input.innerHTML.length > len) {
    input.style.fontSize = "20px";
  }
};

// adding click handlers to number buttons

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    // storing current input string and its last character in variables - used later
    let key = e.target.innerHTML;
    let lastKey = key[key.length - 1];

    // if result is not diplayed, just keep adding
    if (!resultView) {
      input.innerHTML += key;
      changeDisplaySize(input, 16);
    } else if (
      resultView === true ||
      lastKey === "+" ||
      lastKey === "-" ||
      lastKey === "×" ||
      lastKey === "÷" ||
      lastKey === "%"
    ) {
      // if result is currently displayed and user pressed an operator
      // we need to keep on adding to the string for next operation
      resultView = false;
      input.innerHTML += key;
      changeDisplaySize(input, 16);
    }
  });
});

// adding click handlers to operator buttons
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    // storing current input string and its last character in variables - used later
    let key = input.innerHTML;
    let lastKey = key[key.length - 1];

    // if last character entered is an operator, replace it with the currently pressed one
    if (
      (resultView == true && lastKey === "+") ||
      lastKey === "-" ||
      lastKey === "×" ||
      lastKey === "÷" ||
      lastKey === "%"
    ) {
      resultView = false;
      let newKey = key.substring(0, key.length - 1) + e.target.innerHTML;
      input.innerHTML = newKey;
      changeDisplaySize(input, 16);
    } else if (key.length === 0) {
      // if first key pressed is an opearator, don't do anything
    } else {
      // else just add the operator pressed to the input
      input.innerHTML += e.target.innerHTML;
      changeDisplaySize(input, 16);
    }
  });
});

equal.addEventListener("click", () => {
  let dispalyedNumbers = input.innerHTML;

  let { operatorList, numberList } = parseString(dispalyedNumbers);
  performOperations(operatorList, numberList);

  answer.innerHTML = numberList[0];
  changeDisplaySize(answer, 8);

  // Show result
  resultView = true;
});

clearAndUndo(undo, clear, input, answer);
