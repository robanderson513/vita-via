"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name) {
        this.Name = name;
        this.Phrase = name === "Rob" ? "I'm Rob" : "I'm Chiho";
    }
    sayName() {
        console.log(this.Name);
    }
}
exports.User = User;
//# sourceMappingURL=user.model.js.map