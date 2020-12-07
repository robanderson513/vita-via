import { Router } from "express";
import { UserService } from "../services/user.service";

const _userService = new UserService();
export const usersRouter = Router();

usersRouter.get("/", async (request, response) => {
  const name = "Rob";
  const user = await _userService.getUser(name);
  return response.status(200).send(user);
});
