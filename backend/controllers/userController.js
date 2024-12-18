import userModel from "../models/usermodels.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });

        // user not found
        if(!user){
            return res.json({success:false,message:"User not found"});
        }

        //check password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.json({success:false,message:"Invalid credentials"});
        }

        const token = createToken(user._id);
        res.json({success:true,token});

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Server error"});
    }
}

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{
        // expiresIn:3*24*60*60
    });
}

//register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        //check if user already exists
        const exists = await userModel.findOne({ email });
        if(exists){
            return res.json({success:false,message:"User already exists"});
        }


        //validate email and strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Invalid email"});
        }

        if(password.length<8){
            return res.json({success:false,message:"Password must be atleast 8 characters long"});
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //create user
        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        });

        //save user
        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success:true,token});
            
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Server error"});
    }
}

export {loginUser,registerUser};