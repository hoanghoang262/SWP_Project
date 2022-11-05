import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema({
    //nguoi so huu
    owner:{
        type: Schema.Types.ObjectId,
        require: true,
        ref: "UserInfos",
        unique:true
    },
    //title or name of course
    name:{
        type: String,
        require: true,
    },
    price:{
        type:Number,
        default: 0
    },
    //thoi gian khoa hoc bat dau
    startDate:{
        type: Date
    },
    online:{
        type:Boolean,
        default:false
    },
    discription:{
        type: String,
        default:"none"
    },
})

export const courseModel = mongoose.model('Course', schema);