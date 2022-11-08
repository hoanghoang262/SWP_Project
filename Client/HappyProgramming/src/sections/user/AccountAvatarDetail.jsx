import {
  Avatar,
  Card,
  Box,
  FormControlLabel,
  Stack,
  Typography,
  Button,
} from '@mui/material';
import { pascalCase } from 'change-case';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import Iconify from '../../Component/Iconify';
import { userInfoState } from '../../Recoil/Atom';
import { useRecoilState } from 'recoil';
import convertBufferToImg from '../../Util/convertBufferToImg';
import { getUserInfoById } from '../../Api/userManager';
import { useParams } from 'react-router-dom';

export default function AccountAvatarDetail({ isNew }) {
  const { id = '' } = useParams();
  const [userData,setUserData] = useState(null)
  useEffect(()=>{
    getUserInfoById(id,(res)=>{
      setUserData(res)
    })
  },[])
  if(userData){
    return (
      <Card elevation={6} sx={{ p: 5 }}>
        <Stack spacing={2} justifyContent="center" alignItems="center">
          <Avatar src={userData.avata ? convertBufferToImg(userData.avata) : null} sx={{ width: 100, height: 100 }} />
          {isNew && (
            <Typography variant="caption" sx={{ textAlign: 'center' }}>
              Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3.1 MB
            </Typography>
          )}
          {!isNew && (
            <Box>
              <Typography variant="subtitle2" sx={{ textAlign: 'center' }}>
                {userData.role
                  .split(' ')
                  .map((word) => pascalCase(word))
                  .join(' ')}
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                sx={{ textAlign: 'center' }}
              >
                {userData.firstName + " " + userData.lastName}
              </Typography>
            </Box>
          )}
  
          {!isNew && (
            <FormControlLabel
              label={<Typography variant="body2">Verified</Typography>}
              labelPlacement="start"
              control={
                <>
                  {userData.verified && (
                    <Iconify
                      icon="akar-icons:check"
                      sx={{ color: 'success.main' }}
                    />
                  )}
                  {!userData.verified  && (
                    <Iconify icon="clarity:window-close-line" />
                  )}
                </>
              }
            />
          )}
          <Box>
          <Button sx={{marginX: "10px", }} color='warning' variant="contained">Mute User</Button> 
          <Button sx={{marginX: "10px",}} color='error' variant="contained">Ban User</Button>
          </Box>
        </Stack>
      </Card>
    );
  }else{
    return(
      <h1>Loading</h1>
    )
  }
}
