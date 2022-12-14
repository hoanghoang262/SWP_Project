import { userInfoModel } from "../model/userInfoModel.js";
import fs from "fs"
import { courseModel } from "../model/courseModel.js";

export const uploadSingle = async (req, res, next) => {
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


export const uploadCourseThumbnail = async (req, res, next) => {
  if (!req.file) {
    console.log("No file received");
    res.status(500).json({mes:"file is empty"});
  } else {
    try {
      const updateData = req.body;
      await courseModel.findByIdAndUpdate(updateData._id, {thumbnail:fs.readFileSync("./Thumbnail/" + req.file.filename)}, { new: true }, (error, doc) => {
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
