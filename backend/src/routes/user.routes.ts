import { Router } from "express";
import { UserService } from "../services/user.service";

const _userService = new UserService();
export const userRoutes = Router();

/**
 * Retrieves a user's info based on name
 */
userRoutes.get("/:name", async (req, res) => {
  const user = await _userService.getUser(req.params.name);
  return res.status(200).send(user);
});
