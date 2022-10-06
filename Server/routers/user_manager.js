//navidate crud method for management user  

import express from "express";
import {deleteMethod, getMethod,postMethod,updateMethod} from '../controller/user_manager.js'

const router = express.Router();

router.get('/',getMethod);   //read method 
router.post('/',postMethod); //create method
router.post("/update",updateMethod);//update method
router.post("/delete",deleteMethod);//delete method
export default router;

