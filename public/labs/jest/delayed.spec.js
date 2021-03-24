import { DelayedAdder } from "./Adders.js";
import { jest } from "@jest/globals";

describe("DelayedAdder", function () {
  // Exercise 3:
  //
  // Write a test the confirms that the `add' method of the
  // `DelayedAdder' class works correctly.  Keep in mind that `add'
  // is asynchronous function and returns a promise instead of a number.
  test("should add two numbers after the delay", function () {});

  // Bonus:
  // Write a test that verifies the promise is rejected when
  // we pass in 0 as a value to be added
  test("should throw an error when we pass in any 0", function () {});
});
