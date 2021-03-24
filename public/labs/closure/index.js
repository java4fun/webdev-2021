/****************************************************************************/
// EXERCISE 1:
//
// The function below should return an object with two
// properties:
// const tempThing = tempTracker();
//
//   setTemp: A function that takes a single argument and sets the
//            current temperature to the value of the argument.
//
//            This function should *not* allow the temperature to go
//            above 100 or below 0.
//
//            Store the current temperature in a closure variable.
//
//   getTemp: A function that returns the last temperature set by
//            the setTemp function.
//
// Bonus 1:
// add a new method, 'history()' that outputs all previous temperatures
// with the latest temperature displayed first.
//   tempThing.setTemp(5);
//   tempThing.setTemp(10);
//   tempThing.history(); // 10, 5
//
// Bonus 2:
// add a new method, `clear()`, that empties out the history
//   tempThing.. clear()
//
function tempTracker() {}

export default tempTracker;
