import mongoose from "mongoose";
import foodPartner from "./foodpartner.model.js";

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    video: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    foodPartner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "foodPartner",
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    savesCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const FoodModel = mongoose.model("FoodModel", foodSchema);

export default FoodModel;