import mongoose from "mongoose";

const foodPartnerSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
}, { timestamps: true });

const foodPartner = mongoose.model("foodPartner", foodPartnerSchema);

export default foodPartner;