import mongoose  from "mongoose";

const likeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    food: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'food',
        required: true
    }
}, {
    timestamps: true
});

const Like = mongoose.model("like", likeSchema);
export default Like;