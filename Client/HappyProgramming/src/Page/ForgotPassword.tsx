import { Box, Button, Container, Link, Stack, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ActionBar from '../Component/ActionBar';
import { useState, useEffect } from 'react'
import React, { FocusEvent } from 'react';

export default function ForgotPassword() {
  
  const [emailState, setEmailState] = useState(true)
  const [email, setEmail] = useState("")
  const [submitState, setSubmitState] = useState(false)

  useEffect(()=>{
      if(email!=""){
        setSubmitState(true)
      }else{
        setSubmitState(false)
      }
  }, [email])
  
  const onBlurEmail = (e: FocusEvent<HTMLInputElement>)=>{
    if(e.target.value == ""){
      setEmailState(false)
    }
    else{
      setEmailState(true)
    }
  }

  return (
    <Box m={3}>
      <ActionBar>
        <Typography variant="body1" sx={{ color: 'grey.700', fontSize: 14, fontWeight: 500 }}>
          Remember?{' '}
          <Link component={RouterLink} to="/sign-in" sx={{ textDecoration: 'none' }}>
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
            <TextField onChange={(e)=>setEmail(e.target.value)}
            onBlur={onBlurEmail}
            error={emailState? false:true}
            helperText={emailState?"":"Email can not be empty"}
             variant="outlined" label="Email" fullWidth />
          </Stack>
          <Button variant="contained" disabled={submitState? false:true} sx={{ height: 50 }}>
            Confirm
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
