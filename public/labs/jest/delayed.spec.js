import { DelayedAdder } from "./Adders.js";
import { jest } from "@jest/globals";

describe("DelayedAdder", function () {
  test("example testing weird adder class", function () {
    let adder = new DelayedAdder();
    expect(adder instanceof DelayedAdder).toBeTruthy();
  });

  // Exercise 5:
  //
  // Write a test the confirms that the `add' method of the
  // `DelayedAdder' class works correctly.  Keep in mind that `add'
  // is asynchronous function and returns a promise instead of a number.

  // Bonus:
  // Write a test that verifies the promise is rejected when
  // we pass in 0 as a value to be added
});
