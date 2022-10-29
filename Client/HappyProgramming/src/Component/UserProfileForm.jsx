import { Box, Container, Typography, Stack, TextField } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { findAccByEmai, updateUserInfo } from '../Api/Authentication';
import { userInfoState } from '../Recoil/Atom';
import isObjectEqual from '../Util/isObjectEqual';
import removeEmptyFromObject from '../Util/removeEmptyFromObject';

export default function UserProfileForm({ checkSave, childFunc }) {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

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


  return (
    <Stack spacing={2} direction="column">
      <Box
        display="flex"
        sx={{ flexDirection: { md: 'row', xs: 'column' }, gap: 3 }}
      >
        <TextField onChange={e => { textChangeHandle(e, "firstName") }} variant="outlined" label="First Name" fullWidth defaultValue={data.firstName} />
        <TextField onChange={e => { textChangeHandle(e, "lastName") }} variant="outlined" label="Last Name" fullWidth defaultValue={data.lastName} />
      </Box>
      <TextField
        onChange={e => { textChangeHandle(e, "email") }}
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
          onChange={e => { textChangeHandle(e, "age") }}
          variant="outlined" label="Age" fullWidth defaultValue={data.age} />
        <TextField
          onChange={e => { textChangeHandle(e, "birthDay") }}
          variant="outlined" label="Birth Dau" fullWidth defaultValue={data.birthDay} />
      </Box>
      <TextField
        onChange={e => { textChangeHandle(e, "phoneNumber") }}
        variant="outlined" label="Contacts Number" defaultValue={data.phoneNumber} />
      <TextField
        onChange={e => { textChangeHandle(e, "address") }}
        variant="outlined" label="Address" defaultValue={data.address} />
    </Stack>
  );
}
