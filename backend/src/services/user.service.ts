import { User } from "../models/user.model";

export class UserService {
  public async getUser(name: string): Promise<User> {
    return new User(name);
  }
}
