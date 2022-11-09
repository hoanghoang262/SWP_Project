import { Box, Card, TextField } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserInfoById } from '../../Api/userManager';
import { UserContext } from '../../context/UserContext';

export default function AccountForm({ isNew }) {
  const { id = '' } = useParams();
  const [userData,setUserData] = useState(null)
  useEffect(()=>{
    getUserInfoById(id,(res)=>{
      setUserData(res)
    })
  },[])

  if(userData){
    return (
      <Card elevation={6} sx={{ p: 3 }}>
        <Box
          display="grid"
          sx={{
            gridTemplateColumns: { xs: 'auto', md: 'auto auto' },
            gap: 3,
          }}
        >
          <TextField
            variant="outlined"
            label="Name"
            value={userData.firstName + " " + userData.lastName}
            fullWidth
          />
          <TextField
            variant="outlined"
            label="Role"
            value={userData.role}
            fullWidth
          />
          <TextField
            variant="outlined"
            label="Email"
            value={userData.email}
            fullWidth
          />
          <TextField
            variant="outlined"
            label="Birthday"
            value="23/12/2002"
            fullWidth
          />
          <TextField
            variant="outlined"
            label="Phone Number"
            value={userData.phoneNumber}
            fullWidth
          />
          <TextField
            variant="outlined"
            label="Address"
            value={userData.address}
            fullWidth
          />
        </Box>
      </Card>
    );
  }else{
    return(
      <h1>Loading</h1>
    )
  }
}
