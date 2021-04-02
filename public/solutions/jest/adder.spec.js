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
  test("should return the sum of two arguments", function () {
    let adder = new WeirdAdder();

    expect(adder.add(1, 2)).toEqual(3);
    expect(adder.add(3, 2)).toEqual(5);
    expect(adder.add(4, 0)).toEqual(4);
  });

  // Exercise 2:
  //
  // Use a spy, write a test that calls the `add' method
  // and confirm that the `foundOdd' method is also called.
  test("should log odd sums", function () {
    let adder = new WeirdAdder();
    jest.spyOn(adder, "foundOdd");
    adder.add(0, 1);
    expect(adder.foundOdd).toHaveBeenCalledWith(1);

    // but are we testing implementation details?
    // maybe we should confirm it is logged instead...
    jest.spyOn(console, "log");
    adder.add(0, 1);
    expect(console.log).toHaveBeenCalledTimes(1);
  });

  test("should render an h1", function () {
    let adder = new WeirdAdder();

    document.body.innerHTML = `<div>Nothing to see here, folks</div>`;

    expect(document.querySelectorAll("h1").length).toEqual(0);
    adder.render();
    expect(document.querySelectorAll("h1").length).toEqual(1);
  });

  test("should trigger a click handler", function () {
    const adder = new WeirdAdder();
    const mock = jest.fn();

    document.body.innerHTML = `<div>Nothing to see here, folks</div>`;

    adder.render(mock);

    const h1 = document.querySelector("h1");
    const event = new MouseEvent("click");
    h1.dispatchEvent(event);

    expect(mock).toHaveBeenCalledTimes(1);
  });
});
