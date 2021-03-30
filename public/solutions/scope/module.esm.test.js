import { promptUserForName, getCurrentName } from "./module.esm.js";

import { describe, expect, test } from "@jest/globals";

describe("Scope Exercise", function () {
  it("should have a function called promptUserForName", function () {
    expect(promptUserForName).toBeDefined();
    expect(typeof promptUserForName).toBe("function");
  });

  it("should have a function called getCurrentName", function () {
    expect(getCurrentName).toBeDefined();
    expect(typeof getCurrentName).toBe("function");
  });
});
