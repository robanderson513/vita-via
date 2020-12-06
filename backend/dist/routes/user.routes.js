"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersRouter = express_1.Router();
usersRouter.get("/", (request, response) => response.json("This is a ROB"));
exports.default = usersRouter;
//# sourceMappingURL=user.routes.js.map