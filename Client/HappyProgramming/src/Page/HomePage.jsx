import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import Narbar from "../Component/Narbar";
import { userInfoState } from "../Recoil/Atom";
import CourseList from "./CourseList";
import CourseExplore from "./CourseExplore";
import CoursePage from "./CoursePage";

function HomePage() {
    //lay thong tin ve nguo idung trung tam
    const [userInfo,setUserInfo] = useRecoilState(userInfoState);
    const navigate = useNavigate();

    useEffect(() =>{
        if(userInfo != null && userInfo.verified == false){
            navigate("/verifyEmail")
        }
    },)

    return (
        <div>
            <Narbar />
            <CourseExplore />
            
        </div>
    )
}

export default HomePage