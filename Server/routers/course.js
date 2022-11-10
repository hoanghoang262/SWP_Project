import express from "express"
import { createCourse, deleteAllCourse, deleteCourse, showAllCourse, updateCourse } from "../controller/course.js"

//create course router
const router = express.Router()

router.get("/",showAllCourse)
router.post("/",createCourse)
router.post("/update",updateCourse)
router.post("/delete",deleteCourse)
router.post("/deleteAll",deleteAllCourse)


export default router