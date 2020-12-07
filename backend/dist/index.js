"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = require("./routes/user.routes");
const PORT = 8000;
const app = express_1.default();
app.use(cors_1.default());
app.get("/", (req, res) => res.send("No"));
app.listen(PORT, () => console.log("Server started"));
//*List of Routes
app.use("/user", user_routes_1.userRoutes);
//# sourceMappingURL=index.js.map