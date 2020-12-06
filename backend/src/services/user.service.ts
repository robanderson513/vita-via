import { User } from "../models/user.model";

export const getUser = async (name: string): Promise<User> => new User(name);
