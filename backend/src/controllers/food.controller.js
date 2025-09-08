import foodModel from "../models/food.model.js";
import foodPartner from "../models/foodpartner.model.js";
import storageService from "../services/storage.service.js";
import likeModel from "../models/likes.model.js";
import saveModel from "../models/save.model.js";
import { v4 as uuidv4 } from "uuid";
async function createFood(req, res){
    // console.log(req.foodPartner);

    // console.log(req.body);
    // console.log(req.file);
    // if (!req.foodPartner) {
    //   return res.status(400).json({ message: "Food partner not found in request" });
    // }

    const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuidv4());

    // console.log(fileUploadResult);
    const foodItem = await foodModel.create({
        name: req.body.name,
        description: req.body.description,
        video: fileUploadResult.url,
        foodPartner: req.foodPartner._id
    })

    res.status(201).json({ 
        message: "Food created successfully",
        foodItem 
    });

}


async function getFoodItems(req, res){
    const foodItems = await foodModel.find({});
    res.status(200).json({
        message: "Food items fetched successfully",
        foodItems
    });
}


async function likeFood(req, res) {
  const { foodId } = req.body;
  const user = req.user;

  const isAlreadyLiked = await likeModel.findOne({
    user: user._id,
    food: foodId,
  });

  if (isAlreadyLiked) {
    await likeModel.deleteOne({
      user: user._id,
      food: foodId,
    });

    await foodModel.findByIdAndUpdate(foodId, {
      $inc: { likeCount: -1 },
    });

    return res.status(200).json({
      message: "Food unliked successfully",
    });
  }

  const like = await likeModel.create({
    user: user._id,
    food: foodId,
  });

  await foodModel.findByIdAndUpdate(foodId, {
    $inc: { likeCount: 1 },
  });

  res.status(201).json({
    message: "Food liked successfully",
    like,
  });
}

async function saveFood(req, res) {

    const { foodId } = req.body;
    const user = req.user;

    const isAlreadySaved = await saveModel.findOne({
        user: user._id,
        food: foodId
    })

    if (isAlreadySaved) {
        await saveModel.deleteOne({
            user: user._id,
            food: foodId
        })

        await foodModel.findByIdAndUpdate(foodId, {
            $inc: { savesCount: -1 }
        })

        return res.status(200).json({
            message: "Food unsaved successfully"
        })
    }

    const save = await saveModel.create({
        user: user._id,
        food: foodId
    })

    await foodModel.findByIdAndUpdate(foodId, {
        $inc: { savesCount: 1 }
    })

    res.status(201).json({
        message: "Food saved successfully",
        save
    })

}

async function getSaveFood(req, res) {

    const user = req.user;

    const savedFoods = await saveModel.find({ user: user._id }).populate('food');

    if (!savedFoods || savedFoods.length === 0) {
        return res.status(404).json({ message: "No saved foods found" });
    }

    res.status(200).json({
        message: "Saved foods retrieved successfully",
        savedFoods
    });

}


export { createFood, getFoodItems, likeFood, saveFood, getSaveFood };








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