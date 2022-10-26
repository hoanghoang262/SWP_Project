import { Box, Container, Typography, Stack, TextField } from '@mui/material';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../Recoil/Atom';

export default function UserProfileForm() {
  //global state contain userinfo
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const data = {
    firstName : userInfo.firstName
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
      <TextField variant="outlined" label="Address" value = {userInfo.address}/>
      <Box
        display="flex"
        sx={{ flexDirection: { md: 'row', xs: 'column' }, gap: 3 }}
      >
        <TextField variant="outlined" label="City" fullWidth />
        <TextField variant="outlined" label="State" fullWidth />
      </Box>
      <Box
        display="flex"
        sx={{ flexDirection: { md: 'row', xs: 'column' }, gap: 3 }}
      >
        <TextField variant="outlined" label="Zip code" fullWidth />
        <TextField variant="outlined" label="Country" fullWidth />
      </Box>
      <TextField variant="outlined" label="Password" type="password" />
    </Stack>
  );
}
