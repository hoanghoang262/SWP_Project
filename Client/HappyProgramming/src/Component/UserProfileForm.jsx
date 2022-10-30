import { Box, Container, Typography, Stack, TextField } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { findAccByEmai, updateUserInfo } from '../Api/Authentication';
import { userInfoState } from '../Recoil/Atom';
import isObjectEqual from '../Util/isObjectEqual';
import removeEmptyFromObject from '../Util/removeEmptyFromObject';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { emailValidation } from '../Component/Validation'

export default function UserProfileForm({ checkSave, childFunc }) {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [value, setValue] = useState( dayjs )
  const [errorAge, setErrorAge] = useState("")
  const [errorPhone, setErrorPhone] = useState("")
  const [errorEmail, setErrorEmail] = useState("")
  const [errorFName, setErrorFName] = useState("")
  const [errorLName, setErrorLName] = useState("")

  //save
  childFunc.update = () => {
    console.log(data)
    updateUserInfo(data,(res)=>{
      console.log("change user info susccess to : " , res)
      findAccByEmai(data,(res) =>{
        setUserInfo(res)
      })
    })
  }

  //exit user profile when user data empty
  useEffect(() => {
    if (userInfo == null || userInfo == []) {
      navigate("/")
    }
  },[userInfo])

  //clone user data 
  const data = { ...userInfo }

  //textfiled update hangdle
  const textChangeHandle = (e, key) => {
    data[key] = e.target.value
    console.log(data)
    checkData()
  }

  //check if user info data is change to update
  const checkData = () => {
    if (isObjectEqual(removeEmptyFromObject({...data}), removeEmptyFromObject({...userInfo}))) {
      checkSave(false)
    } else {
      checkSave(true)
    }
  }

  const DateChangeHandle =(a, key)=>{
    setValue(a)
    const e = {
      target:{
        value:a
      }
    }
    textChangeHandle(e, key)
  }

  const onChangeAge = (e, key) => {
    textChangeHandle(e, key)
    if(parseInt(e.target.value)>100||parseInt(e.target.value)<1){
      setErrorAge("Age can not smaller than 1 and bigger than 100")
    }else{
      setErrorAge("")
    }
  }

  const onChangePhoneNumber = (e, key) => {
    textChangeHandle(e, key)
    var str = e.target.value
    if(str == ""){
      setErrorEmail("PhoneNumber required")
    }
    else
    if(str.length>9||str.length<9){
      setErrorPhone("Invalid PhoneNumber")
    }else{setErrorPhone("")}
  }

  const onChangeEmail = (e, key) => {
    textChangeHandle(e, key)
    if(e.target.value == ""){
      setErrorEmail("Email required")
    }
    else
    if(!emailValidation(e.target.value)){
      setErrorEmail("Invalid email")
    }else{
      setErrorEmail("")
    }
  }

  const onChangeFName = (e, key) => {
    textChangeHandle(e, key)
    if(e.target.value == ""){
      setErrorFName("FirstName required")
    }else{setErrorFName("")}
  }

  const onChangeLName = (e, key) => {
    textChangeHandle(e, key)
    if(e.target.value == ""){
      setErrorLName("LastName required")
    }else{setErrorLName("")}
  }


  return (
    <Stack spacing={2} direction="column">
      <Box
        display="flex"
        sx={{ flexDirection: { md: 'row', xs: 'column' }, gap: 3 }}
      >
        <TextField onChange={e => { onChangeFName(e, "firstname") }} 
        error={errorFName==""? false:true}
        helperText={errorFName}
        variant="outlined" label="First Name" fullWidth defaultValue={data.firstName} />
        <TextField onChange={e => { onChangeLName(e, "lastname") }} 
        error={errorLName==""? false:true}
        helperText={errorLName}
        variant="outlined" label="Last Name" fullWidth defaultValue={data.lastName} />
      </Box>
      <TextField
        onChange={e => { onChangeEmail(e, "email") }}
        error={errorEmail==""? false:true}
        helperText={errorEmail}
        variant="outlined" label="Email" defaultValue={data.email}
        inputProps={{
          autoComplete: 'new-password',
          form: {
            autoComplete: 'off',
          },
        }} />
      <Box
        display="flex"
        sx={{ flexDirection: { md: 'row', xs: 'column' }, gap: 3 }}
      >
        <TextField
          error={errorAge==""? false:true}
          helperText={errorAge}
          onChange={e => { onChangeAge(e, "age") }}
          variant="outlined" label="Age" fullWidth defaultValue={data.age} />
        {/* <TextField
          
          variant="outlined" label="Birth Day" fullWidth defaultValue={data.birthDay} /> */}

        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Birth Day"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={e => { DateChangeHandle(e, "birthday") }}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>  

        

      </Box>
      <TextField
        onChange={e => { onChangePhoneNumber(e,"phoneNumber") }}
        error={errorPhone==""? false:true}
        helperText={errorPhone}
        variant="outlined" label="Contacts Number" defaultValue={data.phoneNumber} />
      <TextField
        onChange={e => { textChangeHandle(e, "address") }}
        variant="outlined" label="Address" defaultValue={data.address} />
    </Stack>
  );
}
