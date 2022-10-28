//navidate crud method for user authentication  
import express from "express";
import {getMethod,deleteAllMethod} from "../controller/accToken.js"

const router = express.Router();

router.get("/",getMethod);  //get all token info
router.get("/deleteAll",deleteAllMethod);  //delete all token info
export default router;