import { userInfoModel } from "../model/userInfoModel.js";
import fs from "fs"

export const uploadSingle = async (req, res, next) => {
  console.log("file",req.file.filename)
  if (!req.file) {
    console.log("No file received");
    res.status(500).json({mes:"file is empty"});
  } else {
    try {
      const updateData = req.body;
      await userInfoModel.findByIdAndUpdate(updateData._id, {avata:fs.readFileSync("./Avata/" + req.file.filename)}, { new: true }, (error, doc) => {
        if (error) {
          console.log("error")
        }
        console.log("image are saved")
        res.status(200).json();
      }).clone();
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err });
    }
  }
}

export const getAllImage = (req, res) => {
  res.status(200).json("get upload");
}