//navidate crud method for user authentication  
import express from "express";
import {getMethod,deleteAllMethod, verifyToken, resendEmailVerify} from "../controller/accToken.js"

const router = express.Router();

router.get("/",getMethod);  //get all token info
router.post("/resendEmail",resendEmailVerify)
router.get("/:id/verify/:token",verifyToken); //verify email token
router.get("/deleteAll",deleteAllMethod);  //delete all token info
export default router;