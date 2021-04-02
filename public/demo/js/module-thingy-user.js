import thingy from "./module-thingy.js";

thingy.set(10);

setTimeout(() => {
  thingy.set(1000);
  console.log("Re set! This is from module-thingy-user", thingy.get());
}, 5000);
