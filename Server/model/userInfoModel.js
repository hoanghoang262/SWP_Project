//model for user data in mongodb 
import mongoose from "mongoose";

const schema = new mongoose.Schema({
    userName: {
        type: String,
        default: 'Anonymous',
    },
    userBirth: {
        type: Date,       
    },
    email: {
        type: String, 
    },
    phoneNumber:{
        type: String,
    }
},{timestamps: true})

export const userInfoModel = mongoose.model('UserInfos', schema);