import {
  moduleC,
  moduleB as moduleBFromModuleC,
} from "./es-module-module-c-circular.js";

console.log("Module B");

function moduleB() {
  moduleC();
  console.log("moduleB function");
}

export { moduleB, moduleBFromModuleC };
