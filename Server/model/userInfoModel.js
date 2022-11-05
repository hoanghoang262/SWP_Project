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
        type: Number,
    },address:{
        type: String
    },
    password:{
        type: String
    },
    role:{
        type: String,
        default: "normal"
    },
    ban:{
        type: Boolean,
        default: false
    },
    verified:{
        type:Boolean,
        default:false
    },avata:{
        type:String
    }
},{timestamps: true})

export const userInfoModel = mongoose.model('UserInfos', schema);