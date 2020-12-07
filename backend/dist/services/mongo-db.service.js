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
exports.MongoDBService = void 0;
const mongodb_1 = require("mongodb");
class MongoDBService {
    constructor() {
        this.DB = "vita-via";
        this.URL = "mongodb+srv://Rob:rob@starter.u6lw5.mongodb.net/test";
        this.mongoClient = new mongodb_1.MongoClient(this.URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
    /**
     * Finds first instance of a document based on collection and query passed in
     * @param collection
     * @param query
     */
    findDocument(collection, query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.mongoClient.connect();
                const database = this.mongoClient.db(this.DB);
                return yield database.collection(collection).findOne(query);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    /**
     * Finds any instance of a document based on collection and query passed in
     * @param collection
     * @param query
     */
    findAllDocuments(collection, query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.mongoClient.connect();
                const database = this.mongoClient.db(this.DB);
                return yield database.collection(collection).find(query).toArray();
            }
            catch (e) {
                console.error(e);
            }
        });
    }
}
exports.MongoDBService = MongoDBService;
//# sourceMappingURL=mongo-db.service.js.map