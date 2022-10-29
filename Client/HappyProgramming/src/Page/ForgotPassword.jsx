import { Box, Button, Container, Link, Stack, TextField, Typography, Alert } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ActionBar from '../Component/ActionBar';
import { useState, useEffect } from 'react'
import React, { FocusEvent } from 'react';
import { emailValidation } from '../Component/Validation'
import { findAccByEmai, signUp } from '../Api/Authentication';

export default function ForgotPassword() {
 
  const [email, setEmail] = useState("")
  const [submitState, setSubmitState] = useState(false)
  const [errorEmail, setErrorEmail] = useState("");
  const [alarmErrorMessage,setAlarmErrorMessage] = useState(null)

  useEffect(()=>{
      if(errorEmail==""&&email!=""){
        setSubmitState(true)
      }else{
        setSubmitState(false)
      }
  }, [email,errorEmail])
  
  const submit = async () =>{
    const data = {
      email:email
    }
    await findAccByEmai(data, (res) => {
      if (res == null) {
        console.log("Email does not exist");
        setAlarmErrorMessage(<Alert id='alert' sx={{ position: 'absolute', width: '15%'}} style={{bottom: 60, right: 10}} severity="error">Email does not exist</Alert>)
        setTimeout(() => {
          setAlarmErrorMessage(null)
        }, 5000);        
      } else {
        console.log("Email duplication", res)
      }
    });
  }

  const onBlurEmail = (e)=>{
    if(e.target.value == ""){
      setErrorEmail("Email can not be empty")
    }else if(!emailValidation(e.target.value)){
      setErrorEmail("Email invalid")
    }
    else{
      setErrorEmail("")
    }
  }

  const onChangeEmail = (e)=>{
    setEmail(e.target.value)
    if(e.target.value == ""){
      setErrorEmail("Email can not be empty")
    }else if(!emailValidation(e.target.value)){
      setErrorEmail("Email invalid")
    }
    else{
      setErrorEmail("")
    }
  }

  return (
    <Box m={3}>
      <ActionBar>
        <Typography variant="body1" sx={{ color: 'grey.700', fontSize: 14, fontWeight: 500 }}>
          Remember?{' '}
          <Link component={RouterLink} to="/signIn" sx={{ textDecoration: 'none' }}>
            Back to sign in
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
        <Stack spacing={3} width={480}>
          <Typography variant="h3" sx={{ color: 'black.800', fontSize: 32, fontWeight: 600 }}>
            Forgot Password?
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.500' }}>
            Enter you email below.
          </Typography>
          <Stack spacing={2}>
            <TextField onChange={onChangeEmail}
            onBlur={onBlurEmail}
            error={errorEmail==""? false:true}
            helperText={errorEmail}
             variant="outlined" label="Email" fullWidth />
          </Stack>
          <Button onClick={()=>submit()} variant="contained" disabled={submitState? false:true} sx={{ height: 50 }}>
            Confirm
          </Button>
        </Stack>
        {alarmErrorMessage}
      </Container>
    </Box>
  );
}
