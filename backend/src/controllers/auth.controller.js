import userModel from "../models/user.model.js";
import foodPartner from "../models/foodpartner.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


async function registerUser(req, res) {

    const { fullName, email, password } = req.body;

    const isUserExist = await userModel.findOne({ email});

    if(isUserExist){
        return res.status(400).json({message:"User already exist"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        fullName,
        email,
        password:hashedPassword,
    })

    const token = jwt.sign({
        id: user._id,
        
    }, process.env.JWT_SECRET, {expiresIn: "1d"});

    res.cookie("token", token)


    res.status(201).json({
        message: "User registered successfully",
        user: {
            _id: user._id,
            fullName: user.fullName,
            email: user.email
        }
    })

}


async function loginUser(req, res){
    const {email, password} = req.body;

    const user = await userModel.findOne({email});

    if(!user){
        return res.status(400).json({message: "User does not exist"});
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid){
        return res.status(400).json({message: "Invalid password"});
    }

    const token = jwt.sign({
        id: user._id,
        
    }, process.env.JWT_SECRET, {expiresIn: "1d"});

    res.cookie("token", token);

    res.status(200).json({
        message: "User logged in successfully",
        user: {
            _id: user._id,
            fullName: user.fullName,
            email: user.email
        }
    });
}

async function logoutUser(req, res){
    res.clearCookie("token");
    res.status(200).json({message: "User logged out successfully"});
}


async function registerFoodPartner(req, res){
    const { fullName, email, password } = req.body;

    const isUserExist = await userModel.findOne({ email});

    if(isUserExist){
        return res.status(400).json({message:"User already exist"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        fullName,
        email,
        password:hashedPassword,
    })

    const token = jwt.sign({
        id: user._id,
        
    }, process.env.JWT_SECRET, {expiresIn: "1d"});

    res.cookie("token", token)


    res.status(201).json({
        message: "User registered successfully",
        user: {
            _id: user._id,
            fullName: user.fullName,
            email: user.email
        }
    })
}

async function loginFoodPartner(req, res){
    const {email, password} = req.body;

    const user = await userModel.findOne({email});

    if(!user){
        return res.status(400).json({message: "User does not exist"});
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid){
        return res.status(400).json({message: "Invalid password"});
    }

    const token = jwt.sign({
        id: user._id,
        
    }, process.env.JWT_SECRET, {expiresIn: "1d"});

    res.cookie("token", token);

    res.status(200).json({
        message: "User logged in successfully",
        user: {
            _id: user._id,
            fullName: user.fullName,
            email: user.email
        }
    });
}

async function logoutFoodPartner(req, res){
    res.clearCookie("token");
    res.status(200).json({message: "User logged out successfully"});
}

export { registerUser, loginUser, logoutUser, registerFoodPartner, loginFoodPartner, logoutFoodPartner };