/**
 * Perform arithmetic operations
 * @param {string[]} operatorList Array of operators
 * @param {string[]} numberList Array of numbers
 */
export const performOperations = (operatorList, numberList) => {
  // Division
  let division = operatorList.indexOf("÷");

  while (division != -1) {
    let divide = numberList[division] / numberList[division + 1];
    if (divide % 1 != 0) {
      divide = divide.toFixed(2);
    } else {
      divide = divide;
    }
    numberList.splice(division, 2, divide);
    operatorList.splice(division, 1);
    division = operatorList.indexOf("÷");
  }

  // Multiplication
  let multiplication = operatorList.indexOf("×");

  while (multiplication != -1) {
    let multiply = numberList[multiplication] * numberList[multiplication + 1];
    numberList.splice(multiplication, 2, multiply);
    operatorList.splice(multiplication, 1);
    multiplication = operatorList.indexOf("×");
  }

  // Subtraction
  let subtraction = operatorList.indexOf("-");

  while (subtraction != -1) {
    let subtract = numberList[subtraction] - numberList[subtraction + 1];
    numberList.splice(subtraction, 2, subtract);
    operatorList.splice(subtraction, 1);
    subtraction = operatorList.indexOf("-");
  }

  // Addition
  let addition = operatorList.indexOf("+");

  while (addition != -1) {
    // using parseFloat is necessary, otherwise it will result in string concatenation
    let adder =
      parseFloat(numberList[addition]) + parseFloat(numberList[addition + 1]);
    numberList.splice(addition, 2, adder);
    operatorList.splice(addition, 1);
    addition = operatorList.indexOf("+");
  }

  // Modulo
  let modulus = operatorList.indexOf("%");

  while (modulus != -1) {
    let mod = parseInt(numberList[modulus]) % parseInt(numberList[modulus + 1]);
    console.log(mod);
    numberList.splice(modulus, 2, mod);
    operatorList.splice(modulus, 1);
    modulus = operatorList.indexOf("%");
  }
};
