import axios from "axios"


const url = "http://localhost:5000"

//check user account when sign in by email and password
export const checkSignIn = async (email, password, callback) => {
    await axios.post(`${url}/user_authentication`, {
        email: email,
        password: password
    })
        .then(res => {
            callback(res.data);
            return res.data
        })
        .catch((err) => {
            console.log(err)
        })
}

//check email duplication
export const findAccByEmai = async (data, callback) => {
    await axios.post(`${url}/user_manager/findAccByEmail`, data)
        .then(res => {
            if(callback != null){
                callback(res.data)
            }
            return res.data
        })
        .catch((err) => {
            console.log(err)
        })
}

//create new user api
export const signUp = async (data, callback) => {
    if (findAccByEmai) {
        await axios.post(`${url}/user_manager`, data)
            .then(res => {
                callback(res.data);
                return res.data
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

//resend email verify
export const resendEmail = async (data,callback) =>{
    await axios.post(`${url}/accToken/resendEmail`, data)
    .then(res => {
        callback(res.data);
        return res.data
    })
    .catch((err) => {
        console.log(err)
    })
}

//update
export const updateUserInfo = async (data, callback) => {
    await axios.post(`${url}/user_manager/update`, data)
        .then(res => {
            callback(res.data);
        })
        .catch((err) => {
            console.log(err)
        })
}