import express from "express";
import cors from "cors";
import { userRoutes } from "./routes/user.routes";

const PORT = 8000;
const app = express();
app.use(cors());
app.get("/", (req, res) => res.send("API HomePage"));
app.listen(PORT, () => console.log("Server started"));

//*List of Routes
app.use("/user", userRoutes);
