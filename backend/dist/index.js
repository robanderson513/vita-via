"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const PORT = 8000;
const app = express_1.default();
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});
app.use("/user", user_routes_1.default);
app.get("/", (req, res) => res.send("No"));
app.listen(PORT, () => console.log("Server started"));
//# sourceMappingURL=index.js.map