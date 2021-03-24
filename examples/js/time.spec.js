describe("testing time-based logic", function() {
  let inFiveSeconds = function(callback) {
    setTimeout(callback, 5000);
  };

  let everyFiveSeconds = function(callback) {
    setInterval(callback, 5000);
  };

  // <<: set-up
  let timedFunction;

  beforeEach(function() {
    timedFunction = jest.fn();
    jest.useFakeTimers();
  });

  afterEach(function() {
    jest.useRealTimers();
  });
  // :>>

  // <<: setTimeout
  it("function that uses setTimeout", function() {
    inFiveSeconds(timedFunction);

    // The callback shouldn't have been called yet:
    expect(timedFunction).not.toHaveBeenCalled();

    // Move the clock forward and trigger timeout:
    jest.advanceTimersByTime(5001);

    // Now it's been called:
    expect(timedFunction).toHaveBeenCalled();
  });
  // :>>

  // <<: setInterval
  it("function that uses setInterval", function() {
    everyFiveSeconds(timedFunction);

    // The callback shouldn't have been called yet:
    expect(timedFunction).not.toHaveBeenCalled();

    // Move the clock forward a bunch of times:
    for (let i=0; i<10; ++i) jest.advanceTimersByTime(5001);

    // It should have been called 10 times:
    expect(timedFunction.mock.calls.length).toEqual(10);
  });
  // :>>
});
