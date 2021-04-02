import findTheFlags from "./index.js";
import fs from "fs";
import path from "path";
import { JSDOM } from "jsdom";

const moduleURL = new URL(import.meta.url);
const dirname = path.dirname(moduleURL.pathname);

const html = fs.readFileSync(path.resolve(dirname, "./index.html"), "utf8");

const page = new JSDOM(html);
// @todo - there's probably a better way to load an HTML file and have it used by jext out of the box
document.body.innerHTML = page.window.document.body.innerHTML;

const bucketEl = document.getElementById("bucket");
const mainEl = document.querySelector(".main");

describe("Find the flags", () => {
  findTheFlags();

  it("Should select flag #1", () => {
    expect(bucketEl.textContent).toMatch("FLAG #1");
    expect(mainEl.textContent).not.toMatch("FLAG #1");
  });

  it("Should select flag #2", () => {
    expect(bucketEl.textContent).toMatch("FLAG #2");
    expect(mainEl.textContent).not.toMatch("FLAG #2");
  });

  it("Should select flag #3", () => {
    expect(bucketEl.textContent).toMatch("FLAG #3");
    expect(mainEl.textContent).not.toMatch("FLAG #3");
  });

  it("Should select flag #4", () => {
    expect(bucketEl.textContent).toMatch("FLAG #3");
    expect(mainEl.textContent).not.toMatch("FLAG #4");
  });

  it("Should select flag #5", () => {
    expect(bucketEl.textContent).toMatch("FLAG #5");
    expect(mainEl.textContent).not.toMatch("FLAG #5");
  });
});
