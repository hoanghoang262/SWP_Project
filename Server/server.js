import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import userManager from "./routers/user_manager.js";
import Authentication from "./routers/user_authentication.js";
import Course from "./routers/course.js"
import accToke from "./routers/accToken.js"
import uploadImage from "./routers/upLoadImage.js"

//app init 
const app = express();
const PORT = process.env.port || 5000;
const URI = "mongodb+srv://hoanghoang262:hoang2622002@cluster0.necqb.mongodb.net/NWP_Project?retryWrites=true&w=majority";


//add middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors({
    origin: ["http://localhost:3000","http://127.0.0.1:3000"]
}));

//add mongoose database
mongoose.connect(URI,{ useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connected to database");
        app.listen(PORT,()=>{
            console.log(`Server is running on http://localhost:${PORT}`);
        })
    })
    .catch(err => {
        console.log('err', err);
    })

//add router 
app.use("/user_manager",userManager);
app.use("/user_authentication",Authentication);
app.use("/accToken",accToke);
app.use("/course",Course)
app.use("/uploadImage",uploadImage)

app.get('/' , (req,res) =>{
    res.send('SUCCESS');
})
