import mongoose from "mongoose";
const userSchema= new mongoose.Schema({
    Name:{
        type: String,
        required:[true,"Name is necessary"]
    },
    Email:{
        type:String,
        required:[true,"Email is necessary"]
    },
    Password:{
        type:String,
        required:[true,"Email is necessary"],
        minlength: [8, "Password must be at least 8 characters long"]
    }

})

const userModel= mongoose.model('users',userSchema)

export default userModel;