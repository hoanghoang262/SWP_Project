import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema({
    userID:{
        type: Schema.Types.ObjectId,
        require: true,
        ref: "UserInfos",
        unique:true
    },
    token:{
        type:String,
        require:true
    },
    createdAt: { 
        type: Date, 
        default: Date.now, 
        expires: 3600 },
})

export const tokenModel = mongoose.model('Token', schema);