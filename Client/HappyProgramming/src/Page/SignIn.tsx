import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Link,
  Container,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ActionBar from '../Component/ActionBar'
import { BiShow, BiHide } from "react-icons/bi";
import {checkSignIn} from "../Api/Authentication"
 
export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [data,setData] = useState(); 

  //submid sign in
  const submit = () =>{
    checkSignIn(email,password,(inputData:any) => {
      setData(inputData);
      if(data == null){

      }else{

      }
    });
  }


  return (
    <Box m={3}>
      <ActionBar>
        <Typography variant="body1" sx={{ color: 'grey.700', fontSize: 14, fontWeight: 500 }}>
          Dont't have an account?{' '}
          <Link component={RouterLink} to="/signUp" sx={{ textDecoration: 'none' }}>
            Create one!
          </Link>
        </Typography>
      </ActionBar>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          marginTop: { xs: '100px', md: '200px' },
          justifyContent: { xs: 'center', md: 'space-between' },
          alignItems: 'center',
          gap: 3,
        }}
      >
        <Box
          sx={{ width: 480, height: 300, display: { md: 'block', xs: 'none' } }}
          component="img"
          src="src/assets/figure.png"
          alt="mock"
        />

        <Stack spacing={3} width={480}>
          <Typography variant="h3" sx={{ color: 'black.800', fontSize: 32, fontWeight: 600 }}>
            Sign in to Happy Program
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.500' }}>
            Enter your details below.
          </Typography>
          <Stack spacing={2}>
            <TextField onChange={(e) => setEmail(e.target.value)} variant="outlined" label="Email" fullWidth />
            <TextField onChange={(e) => setPassword(e.target.value)} variant="outlined" label="Password" type={hidePassword ? "password" : "text"} fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setHidePassword(!hidePassword)}>
                      {hidePassword ? <BiHide size={25} /> : <BiShow color='#0089ff' size={25} />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            // sx={{ 'a, span': { fontSize: 15 } }}
            >
              <FormControlLabel control={<Checkbox size="small" />} label="Remember me" />
              <Link component={RouterLink} to="/forgot-password" sx={{ textDecoration: 'none' }}>
                Forgot Password?
              </Link>
            </Box>
          </Stack>
          <Button onClick={submit} variant="contained" sx={{ height: 50 }}>
            Sign In
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
