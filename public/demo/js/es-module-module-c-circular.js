import { moduleB } from "./es-module-module-b-circular.js";

console.log("Module C");

function moduleC() {
  //moduleB(); // This causes a call stack issue
  console.log("moduleC function");
}

export { moduleC, moduleB };
