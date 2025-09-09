import mongoose  from "mongoose";

const likeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    food: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FoodModel',
        required: true
    }
}, {
    timestamps: true
});

const Like = mongoose.model("Like", likeSchema);
export default Like;