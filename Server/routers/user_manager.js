//navidate crud method for management user  

import express from "express";
import {deleteAllMethod, deleteMethod, findAccByEmail, getMethod,getUserInfoById,postMethod,updateMethod} from '../controller/user_manager.js'

const router = express.Router();

router.get('/',getMethod);   //read method 
router.get('/:id',getUserInfoById);   //get userInfo by id method 
router.post('/',postMethod); //create method
router.post("/update",updateMethod);//update method
router.get("/update",(req,res) => {res.status(200).json("Update user info")});//get update method
router.post("/delete",deleteMethod);//delete method
router.get("/deleteAll",deleteAllMethod);//delete all acc method
router.post("/findAccByEmail",findAccByEmail);//find account by an email
export default router;

