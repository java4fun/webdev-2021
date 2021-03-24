import Hosts from "./index.js";

describe("Hosts", function () {
  beforeEach(function () {
    expect(Hosts).toBeDefined();

    Hosts.clear();

    Hosts.add("localhost", "127.0.0.1");
    Hosts.add("myname", "127.0.0.1");
    Hosts.add("foobar", "192.168.1.2");
    Hosts.add("foobar", "192.168.1.3");
  });

  describe("lookupByName", function () {
    it("should have a lookupByName function", function () {
      expect(typeof Hosts.lookupByName).toBe("function");
    });

    if (typeof Hosts.lookupByName === "function") {
      it("should return an array on empty query", function () {
        let result = Hosts.lookupByName("shouldbeempty");

        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(0);
      });

      it("should return multiple IP addresses", function () {
        let result = Hosts.lookupByName("foobar");

        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(2);
        expect(result).toEqual(expect.arrayContaining(["192.168.1.2"]));
        expect(result).toEqual(expect.arrayContaining(["192.168.1.3"]));
      });
    }
  });

  describe("lookupByIP", function () {
    it("should have a lookupByIP function", function () {
      expect(typeof Hosts.lookupByIP).toBe("function");
    });

    if (typeof Hosts.lookupByIP === "function") {
      it("should return an array on empty query", function () {
        let result = Hosts.lookupByIP("0.0.0.0");

        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(0);
      });

      it("should result multiple names", function () {
        let result = Hosts.lookupByIP("127.0.0.1");

        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(2);
        expect(result).toEqual(expect.arrayContaining(["localhost"]));
        expect(result).toEqual(expect.arrayContaining(["myname"]));
      });
    }
  });

  describe("clear", function () {
    it("should have a clear function", function () {
      expect(typeof Hosts.clear).toBe("function");
    });

    if (typeof Hosts.clear === "function") {
      it("should empty out the list of host names", function () {
        let result = Hosts.lookupByIP("127.0.0.1");
        expect(result.length).toBe(2);

        Hosts.clear();

        result = Hosts.lookupByIP("127.0.0.1");
        expect(result.length).toBe(0);
      });
    }
  });

  // Bonus Question (Alternative approach)
  if ("length" in Hosts) {
    describe("bonus", function () {
      it("length getter should return correct number of entries", function () {
        // Should be 3 from the `beforeEach' call.
        expect(Hosts.length).toBe(3);

        // Should not change.
        Hosts.add("localhost", "0.0.0.0");
        expect(Hosts.length).toBe(3);

        // Now it should change.
        Hosts.add("nixos.org", "1.1.1.1");
        expect(Hosts.length).toBe(4);
      });
    });
  }
});
