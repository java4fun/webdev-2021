describe("asynchronous function testing", function() {
  it("uses an asynchronous function", function(done) {

    // `setTimeout' returns immediately,
    // so this test does too!
    setTimeout(function() {
      expect(done instanceof Function).toBeTruthy();
      done(); // tell Jasmine we were called.
    }, 1000);

  });
});
