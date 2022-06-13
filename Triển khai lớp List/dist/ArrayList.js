"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayList = void 0;
class ArrayList {
    constructor() {
        this.container = [];
    }
    add(t) {
        this.container.push(t);
    }
    get(index) {
        return this.container[index];
    }
    remove() {
        this.container = [];
    }
    size() {
        return this.container.length;
    }
}
exports.ArrayList = ArrayList;
//# sourceMappingURL=ArrayList.js.map