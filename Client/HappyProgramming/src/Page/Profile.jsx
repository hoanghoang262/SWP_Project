import { Box, Typography, Container, Stack, Button } from '@mui/material';
import { useRef, useState } from 'react';
import { findAccByEmai } from '../Api/Authentication';
import UserProfileForm from '../Component/UserProfileForm';

export default function Profile() {
  const [save,setSave] = useState(false);
  const childFunc = useRef(null)

  //set save button state
  const checkSave = (is) =>{
    console.log(is)
    if(is != save){
      setSave(is)
    }
  }

  const submit = () => {
    childFunc.update();
  }

  return (
    <>
      <Box display="flex" justifyContent="center">
        <Container maxWidth="md">
          <Stack spacing={3} direction="column">
            <Typography variant="h5" sx={{ fontSize: 20, fontWeight: 600 }}>
              User Profile
            </Typography>
            <Box
              sx={{ width: '100px', height: '100px', backgroundColor: 'coral' }}
            >
              <img
                width={'100px'}
                src="https://static.vecteezy.com/system/resources/previews/002/002/403/large_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
              />
            </Box>
            <UserProfileForm checkSave = {checkSave} childFunc = {childFunc}/>
            <div>
              <Button
                onClick={submit} 
                disabled ={save ? false: true} variant="contained">Save</Button>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
