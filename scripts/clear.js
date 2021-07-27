/**
 * Clear or undo the input
 * @param {object} undo Undo HTML object
 * @param {object} clear Clear HTML object
 * @param {object} input Input HTML object
 * @param {object} answer Answer html object
 */
export const clearAndUndo = (undo, clear, input, answer) => {
  undo.addEventListener("click", () => {
    input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length - 1);
  });

  clear.addEventListener("click", () => {
    input.innerHTML = "";
    answer.innerHTML = "";
  });
};
