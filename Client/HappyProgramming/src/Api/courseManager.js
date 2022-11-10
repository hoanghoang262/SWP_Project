import axios from "axios"

const url = "http://localhost:5000"

//get course 
export const getAllCourseInfo = async (callback) => {
    await axios.get(`${url}/Course/`)
        .then(res => {
            callback(res.data)
            return res.data
        })
        .catch((err) => {
            console.log(err)
        })
}

//setup course thumnail
export const setUserAvata = async (data , callback) =>{
    console.log(data)
    await axios.post(`${url}/uploadImage/`,data,{
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(res => {
            callback(res.data)
            return res.data
        })
        .catch((err) => {
            console.log(err)
        })
}