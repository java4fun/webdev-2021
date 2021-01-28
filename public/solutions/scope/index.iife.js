/****************************************************************************/
/**
 * Scope Exercise
 *
 * Resist the urge to jump ahead and attempt to encapsulate or modularize this code...
 * Create functions and variables in the global scope... you should not need to write a single {} object
 *
 * Create two functions that share access to the same variable(s)
 *
 * promptUserForName()
 *
 * - This function takes 0 arguments and returns nothing
 * - This will ask the user for input using the built-in `prompt` function
 *      https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
 * - The function should keep track of how many times it has been invoked
 * - After the 1st invokation, it should not prompt() the user for their name again
 *
 * getCurrentName()
 *
 * - This function takes 0 arguments
 * - It should use the built-in `alert` function to "echo" the latest name the user provided
 *     https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
 *
 * Bonus:
 * How can I lock things down so another part of my app can't overwrite all these variables? (You can use objects now)
 *
 *
 */
const myLib = (function () {
  let callCount = 0;
  let name;

  function promptUserForName() {
    callCount++;

    if (callCount > 1) {
      return;
    }

    name = prompt("What is your name?");
  }

  function getCurrentName() {
    alert(`The last name was: ${name}`);
  }

  return {
    promptUserForName,
    getCurrentName,
  };
})();

myLib.promptUserForName();
