"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    _id: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dob: { type: String },
    number: { type: String },
    email: { type: String },
    address: { type: String },
});
const User = mongoose_1.model("User", UserSchema);
exports.User = User;
//# sourceMappingURL=user.model.js.map