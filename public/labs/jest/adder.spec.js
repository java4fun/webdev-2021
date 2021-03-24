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
  test("should return the sum of two arguments", function () {});

  // Exercise 2:
  //
  // Use a spy, write a test that calls the `add' method
  // and confirm that the `foundOdd' method is also called.
  test("should log odd sums", function () {});
});
