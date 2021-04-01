/****************************************************************************/
/**
 * Scope Exercise
 *
 * Resist the urge to jump ahead and attempt to encapsulate or modularize this code...
 * Create functions and variables in the global scope... you should not need to write a single {} object
 *
 * Implement the following functions
 *
 * promptUserForName()
 *
 * - This function takes 0 arguments and returns nothing
 * - This will ask the user for input using the built-in `prompt` function
 *      https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
 * - The function should keep track of how many times it has been invoked
 *  - After the 1st invokation, it should not prompt() the user for their name again. Instead, do nothing.
 *
 *
 * getCurrentName()
 *
 * - This function takes 1 optional argument, a default name.
 * - It should use the built-in `alert` function to "echo" the last `name` the user provided
 *      from the `promptuserForName` function
 *     https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
 * - If the name is not yet set and no default is provided, do nothing.
 * - If the name is not yet set but the default name was provided, `alert` using the default.
 *
 * ex:
 *  getCurrentName(); // does nothing
 *  getCurretName("Default Name"); // Alerts "Default Name"
 *  promptUserForName(); // I then enter "Ryan"
 *  getCurrentName(); // Alerts "Ryan"
 *  getCurrentName("Default Name"); // Alerts "Ryan"
 *
 */
