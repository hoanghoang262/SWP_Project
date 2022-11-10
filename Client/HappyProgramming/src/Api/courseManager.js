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