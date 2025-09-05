// create server

import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
    res.send("Server is running");
})
export default app;