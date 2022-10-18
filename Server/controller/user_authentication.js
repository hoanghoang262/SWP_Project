// api authentication "/user_authentication"
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