import delayedFn, { delayedFnWithPromises } from "./index.js";
import { jest } from "@jest/globals";

jest.useFakeTimers();

it("should run the function with a delay", (done) => {
  const mockFn = jest.fn();

  delayedFnWithPromises(mockFn, 1000);

  expect(mockFn).toHaveBeenCalledTimes(0);
  jest.advanceTimersByTime(500);
  expect(mockFn).toHaveBeenCalledTimes(0);
  jest.advanceTimersByTime(500);
  expect(mockFn).toHaveBeenCalledTimes(1);

  done();
});

it("should return a promise", () => {
  const mockFn = jest.fn();

  const result = delayedFnWithPromises(mockFn, 1000);

  expect(result).toBeInstanceOf(Promise);
});

it("promise should return result of my function", () => {
  const mockFn = jest.fn(() => 5);

  const result = delayedFnWithPromises(mockFn, 100);
  jest.advanceTimersByTime(500);

  return expect(result).resolves.toBe(5);
});

it("promise should reject if I give invalid timer value", () => {
  const mockFn = jest.fn(() => 5);

  const result = delayedFnWithPromises(mockFn, -500);

  return expect(result).rejects.toThrow(new Error("Delay is out of bounds"));
});
