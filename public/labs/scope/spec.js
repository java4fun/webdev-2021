describe("Scope Exercise", function () {
  // beforeEach(function () {
  //   name = undefined;
  //   callCount = undefined;
  // });

  it("should have a function called promptUserForName", function () {
    expect(promptUserForName).toBeDefined();
    expect(typeof promptUserForName).toBe("function");
  });

  it("should have a function called getCurrentName", function () {
    expect(getCurrentName).toBeDefined();
    expect(typeof getCurrentName).toBe("function");
  });

  // it("should have a function called promptUserForName", function () {
  //   spyOn(window, "prompt").and.returnValues("Jane", "Tim", "Toby");

  //   promptUserForName();
  //   promptUserForName();
  //   promptUserForName();

  //   expect(name).toEqual("Jane");
  // });

  // it("should have a function called promptUserForName", function () {
  //   spyOn(window, "prompt").and.returnValues("Jane", "Tim", "Toby");
  //   spyOn(window, "alert");

  //   promptUserForName();
  //   promptUserForName();
  //   promptUserForName();

  //   getCurrentName();

  //   expect(window.alert).toHaveBeenCalledWith("Jane");
  // });
});
