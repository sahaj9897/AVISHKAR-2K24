import userModel from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

const registerController = async (req, res) => {
    try {
        const existingUser = await userModel.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(200).send({ message: "User already exists", success: false });
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201).send({ message: "Registration successful", success: true });

        const token=jwt.sign({id:user.id},process.env.JWT_SECRET,{expiresIn:'id'})
        res.status(200).send({message:'Login Success',success:true,token})    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: `Register Controller ${error.message}` });
    }
};

const loginController = async(req,res) => {
    try{
        const user= await userModel.findOne({email:req.body.email})
        if(!user){
            return res.status(200).send({message:"user not found",success:false})
        }
        const isMatch=await bcrypt.compare(req.body.password,user)
        if(!isMatch){
            return res.status(200).send({message:"Invalid Email or Password",success:false})
        }
    }
    catch(error){
        console.log(error)
        res.status(500).send({message:'Error in login CTRL${error.message}'})
    }
};

export { loginController, registerController };
