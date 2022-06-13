"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArrayList_1 = require("./ArrayList");
let arraylist = new ArrayList_1.ArrayList();
arraylist.add({ title: 'hello', index: 12 });
arraylist.add({ title: 'hi', index: 45 });
arraylist.add({ title: 'xinchao', index: 33 });
arraylist.get(2);
console.log(arraylist.size());
console.log(arraylist.get(2));
console.log(arraylist.container);
//# sourceMappingURL=main.js.map