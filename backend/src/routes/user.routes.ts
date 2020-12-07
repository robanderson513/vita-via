import { Router } from "express";
import { UserService } from "../services/user.service";

const _userService = new UserService();
export const usersRouter = Router();

usersRouter.get("/:name", async (req, res) => {
  const user = await _userService.getUser(req.params.name);
  return res.status(200).send(user);
});
