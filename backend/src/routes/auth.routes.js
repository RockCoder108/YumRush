import express from "express";
import { registerUser } from "../controllers/auth.controller.js";
import { loginUser } from "../controllers/auth.controller.js";
import { logoutUser } from "../controllers/auth.controller.js";

const router = express.Router();


router.post('/user/register', registerUser);
router.post('/user/login', loginUser);
router.post('/user/logout', logoutUser);

export default router;