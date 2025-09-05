import e from "express";
import foodPartner from "../models/foodpartner.model.js";
import jwt from "jsonwebtoken";

async function authFoodPartner(req, res, next){

    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({message: "Unauthorized"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.foodPartner = await foodPartner.findById(decoded.id);
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
}

export { authFoodPartner };