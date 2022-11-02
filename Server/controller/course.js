import { courseModel } from "../model/courseModel.js";

//get data of all course in mongo database
export const showAllCourse = async (req,res) =>{
    try{
        const courseInfo = await courseModel.find();
        console.log("useInfo :" , courseInfo);
        res.status(200).json(courseInfo);
    }catch(err){
        console.log(err);
        res.status(500).json({error : err})
    }
}

//create course data doc method 
export const createCourse = async (req,res) =>{
    try{
        //doc du lieu course tu request
        const newCourseInfo = req.body;
        //save course to database
        const courseInfo = await new courseModel(newCourseInfo).save();
        res.status(200).json(courseInfo);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : err});
    }
}

//update course info method
export const updateCourse = async (req,res) =>{
    try{
        //read data from request
        const updateData = req.body;
        //update data find by id 
        await courseModel.findByIdAndUpdate(updateData._id,updateData,{new: true},(error,doc) => {
            if(error){
                console.log("error")
            }
            console.log("doc : " , doc)
            res.status(200).json();
        }).clone(); 
    }catch(err){
        console.log(err);
        res.status(500).json({error : err});
    }
} 

//delete course info method
export const deleteCourse = async (req,res) => {
    try{
        const deleteData = req.body;
        courseModel.findByIdAndDelete(deleteData._id,(error , result) => {
            if(error){
                console.log("error")
            }
            console.log("Deleted :" , result)
            res.status(200).json(result)
        })
    }catch(err){
        console.log(err);
        res.status(500).json({error : err});
    }
}

//delete all course info method
export const deleteAllCourse = async (req,res) => {
    try{
        await courseModel.deleteMany({})
        res.status(200).json("deleteAll")
    }catch(err){
        console.log(err);
        res.status(500).json({error : err});
    }
}
