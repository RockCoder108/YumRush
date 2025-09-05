import express from "express";
import { createFood } from "../controllers/food.controller.js"
import { authFoodPartner } from "../middlewares/auth.middleware.js";
import multer from "multer";

const upload = multer({
    storage: multer.memoryStorage(),
});
const router = express.Router();


// POST /api/food/ [protected]
router.post('/',authFoodPartner, upload.single('video'),createFood);

export default router;
