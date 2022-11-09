import express from "express";
import multer from "multer"
import { getAllImage, uploadSingle } from "../controller/uploadImage.js";
import path from "path"

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './Avata');
    },
    filename: function (req, file, callback) {
        console.log(file)
        callback(null,file.originalname)
    }
});

const upload = multer({ storage: storage })
const router = express.Router();

router.get("/", getAllImage)
router.post("/", upload.single("image"), uploadSingle)

export default router