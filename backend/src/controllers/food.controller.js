import foodModel from "../models/food.model.js";
import foodPartner from "../models/foodpartner.model.js";
import storageService from "../services/storage.service.js";
import { v4 as uuidv4 } from "uuid";
async function createFood(req, res){
    console.log(req.foodPartner);

    console.log(req.body);
    console.log(req.file);

    const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuidv4());

    console.log(fileUploadResult);

    res.send("food created");

    
}


export { createFood }








// const { name, video, description } = req.body;

    // try {
    //     const food = await foodModel.create({
    //         name,
    //         video,
    //         description,
    //         foodPartner: req.foodPartner._id
    //     });
    //     return res.status(201).json({ food });
    // } catch (error) {
    //     console.error("Error creating food:", error);
    //     return res.status(500).json({ message: "Internal server error" });
    // }