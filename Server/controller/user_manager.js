// api curl for user managerment  "/user_manager"

import { userInfoModel } from "../model/userInfoModel.js"

// get medthod 
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

//post method 
export const postMethod = async (req,res) =>{
    try{
        const newUserInfo = req.body;
        const userInfo = new userInfoModel(newUserInfo);
        await userInfo.save();
        res.status(200).json(userInfo);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : err});
    }
}

//update method
export const updateMethod = async (req,res) =>{
    try{
        const updateData = req.body;
        const userInfo = userInfoModel.findByIdAndUpdate(updateData._id,updateData,{new: true},(error,doc) => {
            if(error){
                console.log("error")
            }
            console.log("doc : " , doc)
            res.status(200).json(doc);
        }); 
    }catch(err){
        console.log(err);
        res.status(500).json({error : err});
    }
} 

//delete method
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