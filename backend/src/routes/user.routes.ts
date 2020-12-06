import { Router } from "express";

const usersRouter = Router();

usersRouter.get("/", (request, response) =>
  response.json({ user: "Robertooooooo" })
);

export default usersRouter;
