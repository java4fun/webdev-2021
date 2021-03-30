// import Hosts from "./index-es-module.js";
import {
  add,
  clear,
  lookupByName,
  lookupByIP,
  getLength,
} from "./index-es-module.js";

describe("Hosts", function () {
  beforeEach(function () {
    clear();

    add("localhost", "127.0.0.1");
    add("myname", "127.0.0.1");
    add("foobar", "192.168.1.2");
    add("foobar", "192.168.1.3");
  });

  describe("lookupByName", function () {
    it("should have a lookupByName function", function () {
      expect(typeof lookupByName).toBe("function");
    });

    if (typeof lookupByName === "function") {
      it("should return an array on empty query", function () {
        let result = lookupByName("shouldbeempty");

        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(0);
      });

      it("should return multiple IP addresses", function () {
        let result = lookupByName("foobar");

        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(2);
        expect(result).toEqual(expect.arrayContaining(["192.168.1.2"]));
        expect(result).toEqual(expect.arrayContaining(["192.168.1.3"]));
      });
    }
  });

  describe("lookupByIP", function () {
    it("should have a lookupByIP function", function () {
      expect(typeof lookupByIP).toBe("function");
    });

    if (typeof lookupByIP === "function") {
      it("should return an array on empty query", function () {
        let result = lookupByIP("0.0.0.0");

        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(0);
      });

      it("should result multiple names", function () {
        let result = lookupByIP("127.0.0.1");

        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(2);
        expect(result).toEqual(expect.arrayContaining(["localhost"]));
        expect(result).toEqual(expect.arrayContaining(["myname"]));
      });
    }
  });

  describe("clear", function () {
    it("should have a clear function", function () {
      expect(typeof clear).toBe("function");
    });

    if (typeof clear === "function") {
      it("should empty out the list of host names", function () {
        let result = lookupByIP("127.0.0.1");
        expect(result.length).toBe(2);

        clear();

        result = lookupByIP("127.0.0.1");
        expect(result.length).toBe(0);
      });
    }
  });

  // Bonus Question (Alternative approach)
  if (typeof getLength === "function") {
    describe("bonus", function () {
      it("length getter should return correct number of entries", function () {
        // Should be 3 from the `beforeEach' call.
        expect(getLength()).toBe(3);

        // Should not change.
        add("localhost", "0.0.0.0");
        expect(getLength()).toBe(3);

        // Now it should change.
        add("nixos.org", "1.1.1.1");
        expect(getLength()).toBe(4);
      });
    });
  }
});
