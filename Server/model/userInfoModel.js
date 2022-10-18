import mongoose from "mongoose";

const schema = new mongoose.Schema({
    firstName: {
        type: String,
        default: 'Anonymous',
    },
    lastName:{
        type: String,
        default: 'Anonymous',
    },
    birth: {
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