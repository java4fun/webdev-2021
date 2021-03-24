import { DelayedAdder } from "./Adders.js";
import { jest } from "@jest/globals";

describe("DelayedAdder", function () {
  // Example:
  test("example testing delayed adding class", function () {
    let adder = new DelayedAdder();
    let p = adder.add(1, 2);

    expect(p instanceof Promise).toBeTruthy();
  });

  // Exercise 3:
  //
  // Write a test the confirms that the `add' method of the
  // `DelayedAdder' class works correctly.  Keep in mind that `add'
  // is asynchronous function and returns a promise instead of a number.
  test("should add two numbers after the delay", function () {
    let adder = new DelayedAdder();
    let p = adder.add(1, 2);

    // if you use this approach, don't forget to include `done` in the test function?
    // p.then(function (result) {
    //   expect(result).toEqual(3);
    //   done();
    // });

    // returning a promise will also be handled by jest correctly (versus leveraging "done()")
    // return p.then(function (result) {
    //   expect(result).toEqual(3);
    // });

    return expect(p).resolves.toEqual(3);
  });

  test("should throw an error when we pass in any 0", function (done) {
    let adder = new DelayedAdder();
    let p = adder.add(0, 2);

    p.catch(function (err) {
      expect(err).toBeTruthy();
      done();
    });
  });
});
