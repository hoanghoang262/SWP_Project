//navidate crud method for management user  

import express from "express";
import {banUser, deleteAllMethod, deleteMethod, enroll, findAccByEmail, getMethod,getUserInfoById,postMethod,setUserToAdmin,updateMethod} from '../controller/user_manager.js'

const router = express.Router();

router.get('/',getMethod);   //read method 
router.get('/:id',getUserInfoById);   //get userInfo by id method 
router.post('/',postMethod); //create method
router.post("/update",updateMethod);//update method
router.get("/update",(req,res) => {res.status(200).json("Update user info")});//get update method
router.post("/delete",deleteMethod);//delete method
router.get("/deleteAll",deleteAllMethod);//delete all acc method
router.post("/findAccByEmail",findAccByEmail);//find account by an email
router.post("/ban",banUser);//ban user
router.post("/setToAdmin",setUserToAdmin);//set user to admin
router.post("/enroll",enroll);//enroll a course    (input is userId and courseId)
export default router;

