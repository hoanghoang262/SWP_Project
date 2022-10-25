import { Box, Button, Container, IconButton, InputAdornment, Link, Stack, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import { Link as RouterLink } from 'react-router-dom';
import ActionBar from '../Component/ActionBar';
import { signUp } from '../Api/Authentication';
import React, { FocusEvent } from 'react';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [emailState, setEmailState] = useState(true)
  const [firstName, setFirstName] = useState('');
  const [fNameState, setFNameState] = useState(true)
  const [lastName, setLastName] = useState('');
  const [lNameState, setLNameState] = useState(true)
  const [password, setPassword] = useState('');
  const [passState, setPassState] = useState(false)
  const [rePassword, setRePassword] = useState('');
  const [rPassState, setRPassState] = useState(false)
  const [ComparePass, setComparePass] = useState(true)
  const [hidePassword, setHidePassword] = useState(true);
  const [hideCPassword, setHideCPassword] = useState(true);
  const [submitState, setSubmitState] = useState(false);
  const [checkP, setCheckP] = useState(false);


  //submit button
  const submit = () => {
    const data = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
    }
    signUp(data, (res:any) => {
      if (res == null) {
        console.log("Sign up deline");
      } else {
        console.log("sign up success ", res)
      }
    });
  }

  //set submit button disable state
  useEffect(() => {
    if (email != "" && password != "" && firstName != "" && lastName != "" && checkP == true) {
      setSubmitState(true)
    } else {
      setSubmitState(false)
    }
  }, [email, password, firstName, lastName,checkP])

  //check password and repassword
  useEffect(() => {
    if (password != rePassword) {
      setCheckP(false)
    } else {
      setCheckP(true)
    }
  },[password,rePassword])

  const onBlurEmail = (e: FocusEvent<HTMLInputElement>) => {
    if(e.target.value == ""){
      setEmailState(false);
    }else{
      setEmailState(true);
    }
  }

  const onBlurPassword = (e: FocusEvent<HTMLInputElement>) => {
    if(e.target.value == ""){
      setPassState(false)
    }else{
      setPassState(true)
    }
  }

  const onBlurRePassword = (e: FocusEvent<HTMLInputElement>) => {
    if(e.target.value == ""){
      setRPassState(false)
    }else{
      setRPassState(true)
    }
  }

  const onBlurFName = (e: FocusEvent<HTMLInputElement>) => {
    if(e.target.value == ""){
      setFNameState(false)
    }else{
      setFNameState(true)
    }
  }

  const onBlurLName = (e: FocusEvent<HTMLInputElement>) => {
    if(e.target.value == ""){
      setLNameState(false)
    }else{
      setLNameState(true)
    }
  }

  const onChangeRePass = (e: FocusEvent<HTMLInputElement>) => {
    setRePassword(e.target.value)
    
    if(e.target.value == ""){
      setRPassState(false)
    }else{
      setRPassState(true)
    }

    if(e.target.value == password){
      setComparePass(true)
    }else{
      setComparePass(false)
    }
  }

  const onChangePass = (e: FocusEvent<HTMLInputElement>) => {
    setPassword(e.target.value)

    if(e.target.value == ""){
      setPassState(false)
    }else{
      setPassState(true)
    }
  

    if(e.target.value == rePassword){
      setComparePass(true)
    }else{
      setComparePass(false)
    }
  }

  return (
    <Box m={3}>
      <ActionBar>
        <Typography variant="body1" sx={{ color: 'grey.700', fontSize: 14, fontWeight: 500 }}>
          Already have an account{' '}
          <Link component={RouterLink} to="/signIn" sx={{ textDecoration: 'none' }}>
            Login!
          </Link>
        </Typography>
      </ActionBar>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          marginTop: { xs: '100px', md: '200px' },
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Stack spacing={3}>
          <Typography variant="h3" sx={{ color: 'black.800', fontSize: 32, fontWeight: 600 }}>
            Get started!
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.500' }}>
            Learn new things, anytime you want.
          </Typography>
          <Stack spacing={2}>
            <TextField onChange={(e) => setEmail(e.target.value)} variant="outlined" label="Email" fullWidth 
            onBlur={onBlurEmail}
            error={emailState? false:true}
            helperText={emailState?"":"Email can not empty"}/>
            <Box display="flex" sx={{ gap: 1 }}>
              <TextField onChange={(e) => setFirstName(e.target.value)} variant="outlined" label="First name" fullWidth 
              onBlur={onBlurFName}
              error={fNameState? false:true}
              helperText={fNameState?"":"FirstName can not empty"}/>
              <TextField onChange={(e) => setLastName(e.target.value)} variant="outlined" label="Last name" fullWidth 
              onBlur={onBlurLName}
              error={lNameState? false:true}
              helperText={lNameState?"":"LastName can not empty"}/>
            </Box>
            <TextField focused onChange={onChangePass} variant="outlined" label="Password" type={hidePassword ? "password" : "text"} fullWidth
              onBlur={onBlurPassword}
              error={passState? false:true}
              helperText={passState?"":"Password can not empty"}
              color={rPassState&&ComparePass? "success":"primary"}
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
            <TextField focused onChange={onChangeRePass} variant="outlined" label="Confirm Password" type={hideCPassword ? "password" : "text"} fullWidth
              onBlur={onBlurRePassword}
              error={rPassState&&ComparePass? false:true}
              helperText={rPassState?(ComparePass?"":"Wrong pasword"):"Password can not empty"}
              color={rPassState&&ComparePass? "success":"error"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setHideCPassword(!hideCPassword)}>
                      {hideCPassword ? <BiHide size={25} /> : <BiShow color='#0089ff' size={25} />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <Button disabled={submitState ? false : true} onClick={() => submit()} variant="contained" sx={{ height: 50 }}>
            Sign Up
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
