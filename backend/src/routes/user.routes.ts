import { Router } from "express";
import { UserService } from "../services/user.service";

const _userService = new UserService();
export const usersRouter = Router();

usersRouter.get("/", async (req, res) => {
  const user = await _userService.getUser(req.query.name as string);
  return res.status(200).send(user);
});
