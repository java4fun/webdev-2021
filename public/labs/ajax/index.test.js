import Ajax from "./index.js";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

describe("Ajax", function () {
  beforeEach(() => {
    fetch.resetMocks();
  });

  describe("raw", function () {
    it("should call fetch", function () {
      fetch.mockResponseOnce(JSON.stringify({}));
      Ajax.get("/");
      expect(fetch).toHaveBeenCalled();
    });

    it("should return a promise", function () {
      fetch.mockResponseOnce(JSON.stringify({}));
      let r = Ajax.get("/");

      expect(typeof r).toBe("object");
      expect(r instanceof Promise).toBeTruthy();
    });

    it("should use the correct HTTP methods", async function (done) {
      fetch.mockResponse(JSON.stringify({}));

      Ajax.get("/");
      expect(fetch).toHaveBeenCalledWith("/", {
        method: "GET",
        body: undefined,
      });

      Ajax.post("/", {});
      expect(fetch).toHaveBeenCalledWith("/", {
        method: "POST",
        body: JSON.stringify({}),
      });

      Ajax.patch("/", {});
      expect(fetch).toHaveBeenCalledWith("/", {
        method: "PATCH",
        body: JSON.stringify({}),
      });

      Ajax.del("/");
      expect(fetch).toHaveBeenCalledWith("/", {
        method: "DELETE",
        body: undefined,
      });

      done();
    });
  });
});
