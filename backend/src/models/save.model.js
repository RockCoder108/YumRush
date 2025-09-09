import mongoose from "mongoose";

const saveSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",   // matches user.model.js
    required: true
  },
  food: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FoodModel",  // must match food.model.js
    required: true
  }
}, { timestamps: true });

const Save = mongoose.model("Save", saveSchema); // capitalized, consistent

export default Save;
