describe("getArtists", function () {
  // Placeholder for the response object:
  let response;

  // Install mock fetch API:
  beforeEach(function () {
    jest.spyOn(window, "fetch").mockImplementation(function (url, options = {}) {
      let json = () => Promise.resolve({ url, options });
      response = { json, ok: true, status: 200 };

      jest.spyOn(response, "json");
      return Promise.resolve(response);
    });
  });

  // Make sure the function returns a promise:
  it("should call fetch and return a promise", function (done) {
    let p = getArtists();
    expect(window.fetch).toHaveBeenCalled();
    expect(p.constructor).toBe(Promise);

    p.then(function () {
      expect(response.json).toHaveBeenCalled();
      done();
    });
  });

  // Make sure the URL for all artists is correct:
  it("should request all artists", function (done) {
    getArtists().then(function (result) {
      expect(Object.keys(result)).toContain("url");
      expect(result.url).toBe("/artists");
      done();
    });
  });

  // Make sure the URL for a single artist is correct:
  it("should request a single artist", function (done) {
    getArtists(1).then(function (result) {
      expect(Object.keys(result)).toContain("url");
      expect(result.url).toBe("/artists/1");
      done();
    });
  });
});
