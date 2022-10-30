import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import Narbar from "../Component/Narbar";
import { userInfoState } from "../Recoil/Atom";

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
            <div className="text-3xl font-bold">home page</div>
        </div>
    )
}

export default HomePage