import axios from "axios"


const url = "http://localhost:5000"

//check user account when sign in by email and password
export const checkSignIn = async (email: string, password: string, callback: Function) => {
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

//check
export const signUp = async (data: any, callback: Function) => {
    await axios.post(`${url}/user_manager`, data)
        .then(res => {
            callback(res.data);
            return res.data
        })
        .catch((err) => {
            console.log(err)
        })
}
