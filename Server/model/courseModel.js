import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema({
    //nguoi so huu
    owner:{
        type: Schema.Types.ObjectId,
        require: true,
        ref: "UserInfos",
        unique:true
    },
    thumbnail:{
        type: Buffer
    },
    //title or name of course
    name:{
        type: String,
        require: true,
    },
    memberList:{
        type:Array,
        default:[]
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
    rating:{
        type:Number
    }
})

export const courseModel = mongoose.model('Course', schema);