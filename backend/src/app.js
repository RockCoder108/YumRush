// create server

import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import foodRoutes from "./routes/food.routes.js";
import foodPartnerRoutes from "./routes/food-partner.routes.js";
import cors from "cors";




const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
    credentials: true,
}));
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/food", foodRoutes);
app.use("/api/foodpartner", foodPartnerRoutes);


app.get("/", (req, res) => {
    res.send("Server is running");
})
export default app;