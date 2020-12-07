import { Collection } from "../models/collection.enum";
import { IUser } from "../models/user.model";
import { MongoDBService } from "./mongo-db.service";

export class UserService extends MongoDBService {
  /**
   * Gets user info based on first name for now
   * @param name
   */
  public async getUser(name: string): Promise<IUser> {
    return await this.findDocument<IUser>(Collection.user, { firstName: name });
  }
}
