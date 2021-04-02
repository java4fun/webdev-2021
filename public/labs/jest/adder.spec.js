import { WeirdAdder } from "./Adders.js";
import { jest } from "@jest/globals";

describe("WeirdAdder", function () {
  // Example:
  test("example testing weird adder class", function () {
    let adder = new WeirdAdder();
    expect(adder instanceof WeirdAdder).toBeTruthy();
  });

  // Exercise 1:
  //
  // Write a test that verifies that the `add' method of the
  // `WeirdAdder' class correctly sums and returns its two
  // arguments.

  // Exercise 2:
  //
  // Using a spy, write a test that calls the `add' method
  // and confirm that the `foundOdd' method is also called.

  // Exercise 3:
  //
  // Verify that the `render()` function will add an H1 to
  // the document

  // Bonus - Exercise 4:
  //
  // Verify that the `render()` function sets a custom click
  // handler on the h1 it renders
});
