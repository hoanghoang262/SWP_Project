import { tokenModel } from "../model/token.js";

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