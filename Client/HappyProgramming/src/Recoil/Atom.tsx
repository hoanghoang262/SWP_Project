import { atom } from "recoil";

export const userInfoState = atom({
    key: "userInfoState",
    default: []
})

export const currentUserInfoState = atom({
    key: "currentUserInfoState",
    default: []
})