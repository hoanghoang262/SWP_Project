import { tokenModel } from "../model/token.js";
import { userInfoModel } from "../model/userInfoModel.js";
import {sendEmail} from "../Util/sendEmail.js"
import crypto from "crypto"

// get all  token data medthod 
export const getMethod = async (req,res) =>{
    try{
        const tokenInfo = await tokenModel.find();
        console.log("token",tokenInfo);
        res.status(200).json(tokenInfo);
    }catch(err){
        console.log(err);
        res.status(500).json({error : err})
    }
}

//verify token
export const verifyToken = async (req,res) => {
    try{
        const user = await userInfoModel.findOne({_id:req.params.id})
        if(!user) return res.status(400).send({message:"Invalid link"})
        const token = await tokenModel.findOne({
            userID:user._id,
            token:req.params.token
        })
        if(!token) return res.status(400).send({message:"Invalid link"})
        await userInfoModel.updateOne({_id: user._id,verified:true})
        await token.remove()
        res.redirect('http://localhost:3000');
    }catch(err){
        console.log(err)
        res.status(500).json({error : err});
    }
}

//resend email verify
export const resendEmailVerify = async (req,res) => {
    try{
        //doc du lieu nguoi dung tu request
        const data = req.body;
        //clear all verify token of this acc
        await tokenModel.deleteMany({"userID":data._id})
        //create email token verify data to database []
        const token = await new tokenModel({
            userID:data._id,
            token:crypto.randomBytes(32).toString("Hex")
        }).save()
        //tao verify url to send 
        const url = `http://localhost:5000/accToken/${data._id}/verify/${token.token}`
        //send mail
        await sendEmail(data.email,"Verify Email","Click here to verify Acc\n" + url)
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : err});
    }
}

//delete all token method
export const deleteAllMethod = async (req,res) => {
    try{
        await tokenModel.deleteMany({})
        res.status(200).json("Delete all")
    }catch(err){
        console.log(err);
        res.status(500).json({err});
    }
}