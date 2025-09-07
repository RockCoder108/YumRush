import express from "express";
import { createFood, getFoodItems } from "../controllers/food.controller.js"
import { authFoodPartner, authUserMiddleware } from "../middlewares/auth.middleware.js";
import multer from "multer";

const upload = multer({
    storage: multer.memoryStorage(),
});
const router = express.Router();


// POST /api/food/ [protected]
router.post('/',authFoodPartner, upload.single('video'),createFood);

router.get('/', authUserMiddleware, getFoodItems);

export default router;
