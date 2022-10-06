import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import userManager from "./routers/user_manager.js";

//app init 
const app = express();
const PORT = process.env.port || 5000; //port initialize
const URI = "mongodb+srv://hoanghoang262:hoang2622002@cluster0.necqb.mongodb.net/NWP_Project?retryWrites=true&w=majority";  //database url

//add middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

//add mongoose database
mongoose.connect(URI,{ useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connected to database");
        app.listen(PORT,()=>{
            console.log(`Server is running on PORT ${PORT}`);
        })
    })
    .catch(err => {
        console.log('err', err);
    })

//add router 
app.use("/user_manager",userManager);

app.get('/' , (req,res) =>{
    res.send('SUCCESS');
})
