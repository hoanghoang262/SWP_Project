import { Box, Container, Typography, Stack, TextField } from '@mui/material';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../Recoil/Atom';

export default function UserProfileForm() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const length:number = userInfo.length;
  return (
    <Stack spacing={2} direction="column">
      <Box
        display="flex"
        sx={{ flexDirection: { md: 'row', xs: 'column' }, gap: 3 }}
      >
        <TextField variant="outlined" label="First Name" fullWidth />
        <TextField variant="outlined" label="Last Name" fullWidth />
      </Box>
      <TextField variant="outlined" label="Email" />
      <TextField variant="outlined" label="Contacts Number" />
      <TextField variant="outlined" label="Address" />
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
