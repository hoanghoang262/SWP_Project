import axios from "axios"

const url = "http://localhost:5000"

//get userinfo list
export const getAllUserInfo = async (callback) => {
    await axios.get(`${url}/user_manager/`)
        .then(res => {
            callback(res.data)
            return res.data
        })
        .catch((err) => {
            console.log(err)
        })
}

//get userinfo by ID
export const getUserInfoById = async (id,callback) => {
    await axios.get(`${url}/user_manager/${id}`)
        .then(res => {
            callback(res.data)
            return res.data
        })
        .catch((err) => {
            console.log(err)
        })
}

//setup user avata
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