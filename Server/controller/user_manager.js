// api curl for user managerment  "/user_manager"

import { userInfoModel } from "../model/userInfoModel.js"
import {tokenModel} from "../model/token.js"
import {sendEmail} from "../Util/sendEmail.js"
import crypto from "crypto"

// get all user data medthod 
export const getMethod = async (req,res) =>{
    try{
        const userInfos = await userInfoModel.find();
        console.log("useInfo :" , userInfos);
        res.status(200).json(userInfos);
    }catch(err){
        console.log(err);
        res.status(500).json({error : err})
    }
}

//create user info data doc method 
export const postMethod = async (req,res) =>{
    try{
        //doc du lieu nguoi dung tu request
        const newUserInfo = req.body;
        //luu thong tin nguoi dung chua dcj sac nhan email vao database
        const userInfo = await new userInfoModel(newUserInfo).save();
        //save email token verify to database 
        const token = await new tokenModel({
            userID:userInfo._id,
            token:crypto.randomBytes(32).toString("Hex")
        }).save()
        //tao verify url to send 
        const url = `http://localhost:5000/accToken/${userInfo._id}/verify/${token.token}`
        //send mail
        await sendEmail(userInfo.email,"Verify Email","Click here to verify Acc\n" + url)
        res.status(200).json(userInfo);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : err});
    }
}



//update user info method
export const updateMethod = async (req,res) =>{
    try{
        const updateData = req.body;
        await userInfoModel.findByIdAndUpdate(updateData._id,updateData,{new: true},(error,doc) => {
            if(error){
                console.log("error")
            }
            console.log("doc : " , doc)
            res.status(200).json();
        }).clone(); 
    }catch(err){
        console.log(err);
        res.status(500).json({error : err});
    }
} 

//delete userinfo method
export const deleteMethod = async (req,res) => {
    try{
        const deleteData = req.body;
        userInfoModel.findByIdAndDelete(deleteData._id,(error , result) => {
            if(error){
                console.log("error")
            }
            console.log("Deleted :" , result)
            res.status(200).json(result)
        })
    }catch(err){
        console.log(err);
        res.status(500).json({error : err});
    }
}

//delete all userinfo method except admin acc
export const deleteAllMethod = async (req,res) => {
    try{
        await userInfoModel.deleteMany({role:{$ne: "admin"}})
        res.status(200).json("deleteAll")
    }catch(err){
        console.log(err);
        res.status(500).json({error : err});
    }
}

//check if email is duplication
export const findAccByEmail = async (req,res) =>{
    try{
        const data = req.body; //read data client send in body
        const userInfo = await userInfoModel.findOne({email:data.email});
        res.status(200).json(userInfo);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : err});
    }
}