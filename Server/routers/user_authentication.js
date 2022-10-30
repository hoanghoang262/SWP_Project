//navidate crud method for user authentication  
import express from "express";
import {authentication} from '../controller/user_authentication.js'

const router = express.Router();

router.get("/",(req,res) => {
    res.send("Authentication").json()    
});
router.post('/',authentication); //authentication user 
export default router;