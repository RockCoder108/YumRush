import express from "express";
import { createFood, getFoodItems, likeFood, saveFood, getSaveFood } from "../controllers/food.controller.js"
import { authFoodPartner, authUserMiddleware } from "../middlewares/auth.middleware.js";
import multer from "multer";

const upload = multer({
    storage: multer.memoryStorage(),
});
const router = express.Router();


// POST /api/food/ [protected]
router.post('/',authFoodPartner, upload.single('video'),createFood);

router.get('/', getFoodItems);

router.post('/like', authUserMiddleware, likeFood);

router.post('/save', authUserMiddleware, saveFood);

router.get('/save', authUserMiddleware, getSaveFood);

export default router;
