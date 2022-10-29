import { useRecoilState } from "recoil";
import { findAccByEmai } from "../Api/Authentication";

const [userInfo, setUserInfo] = useRecoilState(userInfoState);

export const reloadUserData = () =>{
    findAccByEmai(data, (res) => {
        setUserInfo(res)
    } )
}