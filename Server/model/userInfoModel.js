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
    birthDay: {
        type: Date,       
    },
    age:{
        type: Number,
    },
    email: {
        type: String,
        require:true 
    },
    phoneNumber:{
        type: String,
    },address:{
        type: String
    },
    password:{
        type: String
    },
    verified:{
        type:Boolean,
        default:false
    }
},{timestamps: true})

export const userInfoModel = mongoose.model('UserInfos', schema);