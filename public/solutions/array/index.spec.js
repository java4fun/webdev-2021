import * as Labs from "./index.js";

let testUserData = [
  { id: 1, username: "caiva", age: 30 },
  { id: 2, username: "ahxae", age: 17 },
  { id: 3, username: "i4tie", age: 42 },
  { id: 4, username: "bvu7F", age: 19 },
];

describe("Array Exercises", function () {
  describe("Exercise 1", function () {
    it("Should return an array with one element", function () {
      let result = Labs.exercise1();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(1);
    });
    it("Should return a user with age 17", function () {
      let result = Labs.exercise1();
      expect(typeof result[0]).toBe("object");
      expect(result[0].age).toBe(17);
      expect(result[0].username).toBe("ahxae");
    });
  });

  describe("Exercise 2", function () {
    it("Should return an array of 4 strings", function () {
      let result = Labs.exercise2();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(4);
      expect(result).toEqual(["caiva", "ahxae", "i4tie", "bvu7F"]);
    });
  });

  describe("Exercise 3 (Bonus)", function () {
    let result = Labs.exercise3();

    if (result !== undefined) {
      it("Should return an array of 1 element", function () {
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(1);
        expect(result[0]).toBe("1");
      });
    }
  });

  describe("Exercise 4 (Bonus)", function () {
    let result = Labs.exercise4();

    if (result !== undefined) {
      it("Should return an array of 4 elements", function () {
        let reversed = [].concat(testUserData).reverse();
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(4);
        expect(result).toEqual(reversed);
      });
    }
  });
});
