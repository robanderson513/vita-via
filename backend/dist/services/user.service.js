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
exports.UserService = void 0;
const collection_enum_1 = require("../models/collection.enum");
const mongo_db_service_1 = require("./mongo-db.service");
class UserService extends mongo_db_service_1.MongoDBService {
    /**
     * Gets user info based on first name for now
     * @param name
     */
    getUser(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.findDocument(collection_enum_1.Collection.user, { firstName: name });
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map