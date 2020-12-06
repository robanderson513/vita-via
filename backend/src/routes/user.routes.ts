import { Router } from "express";

const usersRouter = Router();

usersRouter.get("/", (request, response) => response.json("This is a ROB"));

export default usersRouter;
