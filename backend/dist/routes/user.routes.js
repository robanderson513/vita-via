"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const user_service_1 = require("../services/user.service");
const _userService = new user_service_1.UserService();
exports.userRoutes = (0, express_1.Router)();
/**
 * Retrieves a user's info based on name
 */
exports.userRoutes.get("/:name", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield _userService.getUser(req.params.name);
    return res.status(200).send(user);
}));
//# sourceMappingURL=user.routes.js.map