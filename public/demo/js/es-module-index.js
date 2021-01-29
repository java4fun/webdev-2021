import { increment, getCount } from "./es-module-module-a.js";
import { moduleBFromModuleC, moduleB } from "./es-module-module-b-circular.js";
import { moduleB as dupeModuleB } from "./es-module-module-c-circular.js";

increment();
increment();

getCount(); // 2

// getting circular
moduleB();
moduleBFromModuleC();
dupeModuleB();
