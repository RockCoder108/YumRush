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
        const partner = await foodPartner.findById(decoded.id);
        if (!partner) {
          return res.status(401).json({ message: "Food partner not found" });
        }
        req.foodPartner = partner;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
}

export { authFoodPartner };