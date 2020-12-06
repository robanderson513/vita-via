import express from "express";
import usersRouter from "./routes/user.routes";

const PORT = 8000;

const app = express();
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/user", usersRouter);
app.get("/", (req, res) => res.send("No"));
app.listen(PORT, () => console.log("Server started"));
