import express from "express";
import usersRouter from "./routes/user.routes";

const PORT = 8000;

const app = express();

app.use("/user", usersRouter);
app.get("/", (req, res) => res.send("HomePage"));
app.listen(PORT, () => console.log("Server started"));
