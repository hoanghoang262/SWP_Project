import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema({
    owner:{
        type: Schema.Types.ObjectId,
        require: true,
        ref: "UserInfos",
        unique:true
    },
    name:{
        type: String,
        require: true,
    },
    code:{
        type:Number
    },
    discription:{
        type: String,
        default:"none"
    },
})

export const courseModel = mongoose.model('Course', schema);