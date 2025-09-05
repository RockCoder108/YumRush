import express from "express";
import { registerUser } from "../controllers/auth.controller.js";
import { loginUser } from "../controllers/auth.controller.js";
import { logoutUser } from "../controllers/auth.controller.js";

import { registerFoodPartner, loginFoodPartner, logoutFoodPartner } from "../controllers/auth.controller.js";

const router = express.Router();

// for user
router.post('/user/register', registerUser);
router.post('/user/login', loginUser);
router.post('/user/logout', logoutUser);

// for food partner
router.post("/foodpartner/register", registerFoodPartner);
router.post("/foodpartner/login", loginFoodPartner);
router.post("/foodpartner/logout", logoutFoodPartner);


export default router;