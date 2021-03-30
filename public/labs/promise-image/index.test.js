import { loadImage } from "./index.js";
import { jest } from "@jest/globals";
import { JSDOM } from "jsdom";

// @todo in progress

// const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// jest.mock(dom.HTMLImageElement);

it("should load an image", () => {
  loadImage("http://placekitten.com/200/300");
});
