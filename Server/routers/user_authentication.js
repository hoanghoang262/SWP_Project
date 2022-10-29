//navidate crud method for user authentication  
import express from "express";
import {authentication, verifyToken} from '../controller/user_authentication.js'

const router = express.Router();

router.get("/",(req,res) => {
    res.send("Authentication").json()    
});
router.post('/',authentication); //authentication user 
//verify email token
router.get("/:id/verify/:token",verifyToken);
export default router;