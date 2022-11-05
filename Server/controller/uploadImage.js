import { userInfoModel } from "../model/userInfoModel.js";
import fs from "fs"

export const uploadSingle = async (req, res, next) => {
  console.log(req.file)
  if (!req.file) {
    console.log("No file received");
    res.status(500).json({mes:"file is empty"});
  } else {
    try {
      const updateData = req.body;
      await userInfoModel.findByIdAndUpdate(updateData._id, {avata:updateData.avata}, { new: true }, (error, doc) => {
        if (error) {
          console.log("error")
        }
        console.log("doc : ", doc)
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