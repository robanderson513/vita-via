import { Router } from "express";
import * as UserService from "../services/user.service";

export const usersRouter = Router();

usersRouter.get("/", async (request, response) => {
  const name = "Rob";
  const user = await UserService.getUser(name);
  return response.status(200).send(user);
});
