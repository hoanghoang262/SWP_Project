// api authentication "/user_authentication"
import { tokenModel } from "../model/token.js";
import { userInfoModel } from "../model/userInfoModel.js"

//post method (create)
export const authentication = async (req,res) =>{
    try{
        const data = req.body; //read data client send in body
        const userInfo = await userInfoModel.findOne({email:data.email,password:data.password});
        res.status(200).json(userInfo);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : err});
    }
}

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
        res.status(200).send({message: "Email verified"})
    }catch(err){
        console.log(err)
        res.status(500).json({error : err});
    }
}

//resend email 
export const resendEmail = async (req,res) => {
    try{
        //chinh sua sau
    }catch(err){
        console.log(err)
        res.status(500).json({error : err});
    }
}