import { Box, Container, Typography, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../Recoil/Atom';

export default function UserProfileForm() {

  //set state manager
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [email,setEmail] = useState("");
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [phoneNumber,setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [contry,setContry] = useState("");
  const [city,setCity] = useState("");
  const [zipCode,setZipCode] = useState("");
  const [state,setState] = useState("");

  //even handle
  const emailHandle = () =>{
    
  } 

  return (
    <Stack spacing={2} direction="column">
      <Box
        display="flex"
        sx={{ flexDirection: { md: 'row', xs: 'column' }, gap: 3 }}
      >
        <TextField variant="outlined" label="First Name" fullWidth value = {userInfo.firstName}/>
        <TextField variant="outlined" label="Last Name" fullWidth value = {userInfo.lastName}/>
      </Box>
      <TextField variant="outlined" label="Email" value = {userInfo.email} />
      <TextField variant="outlined" label="Contacts Number" value = {userInfo.phoneNumber}/>
      <Box
        display="flex"
        sx={{ flexDirection: { md: 'row', xs: 'column' }, gap: 3 }}
      >
        <TextField variant="outlined" label="Country" fullWidth />
        <TextField variant="outlined" label="City" fullWidth />
      </Box>
      <TextField variant="outlined" label="Address" value = {userInfo.address}/>
      <Box
        display="flex"
        sx={{ flexDirection: { md: 'row', xs: 'column' }, gap: 3 }}
      >
        <TextField variant="outlined" label="Zip code" fullWidth />
        <TextField variant="outlined" label="State" fullWidth />
      </Box>
    </Stack>
  );
}
