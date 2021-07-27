/**
 * Parse the given string and get numbers and operators
 * @param {string} dispalyedNumbers Input string
 * @returns Object with operator and numbers array
 */
export function parseString(dispalyedNumbers) {
  let numberList = dispalyedNumbers.split(/\+|\-|\×|\÷|\%/g);

  let operatorList = dispalyedNumbers.replace(/[0-9]|\./g, "").split("");
  return { operatorList, numberList };
}
