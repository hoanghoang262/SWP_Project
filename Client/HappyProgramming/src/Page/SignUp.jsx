import { Box, Button, Container, IconButton, InputAdornment, Link, Stack, TextField, Typography, Alert} from '@mui/material';
import { useEffect, useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import ActionBar from '../Component/ActionBar';
import { findAccByEmai, signUp } from '../Api/Authentication';
import React, { FocusEvent } from 'react';
import { emailValidation } from '../Component/Validation'

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [fNameState, setFNameState] = useState(true)
  const [lastName, setLastName] = useState('');
  const [lNameState, setLNameState] = useState(true)
  const [password, setPassword] = useState('');
  const [passState, setPassState] = useState(true)
  const [rePassword, setRePassword] = useState('');
  const [rPassState, setRPassState] = useState(true)
  const [ComparePass, setComparePass] = useState(true)
  const [hidePassword, setHidePassword] = useState(true);
  const [hideCPassword, setHideCPassword] = useState(true);
  const [submitState, setSubmitState] = useState(false);
  const [checkP, setCheckP] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");
  const [afterSubmit, setAfterSubmit] = useState(true)


  const navigate = useNavigate();

  useEffect(()=>{
    var alert = document.getElementById('alert')
    alert.style.display = 'block'
    setTimeout(()=>{
      alert.style.display = 'none'
      console.log(alert)
      setAfterSubmit(true)
    },5000)
  },[afterSubmit])

  const submit = async () =>{
    const data = {
      email:email
    }
    await findAccByEmai(data, (res) => {
      if (res == null) {
        console.log("Email valid");
        submitHandle();
        navigate("/")
      } else {
        console.log("Email duplication", res)
        setAfterSubmit(false);
      }
    });
  }

  const submitHandle = async () => {
    const data = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
    }
    // api sign up to send data forward server 
    signUp(data, (res) => {
      if (res == null) {
        console.log("Sign up deline");
      } else {
        console.log("sign up success ", res)
      }
    });
  }

  //set submit button disable state
  useEffect(() => {
    if (errorEmail == "" &&email!=""&& password != "" && firstName != "" && lastName != "" && checkP == true) {
      setSubmitState(true)
      
    } else {
      setSubmitState(false)
    }
    
  }, [errorEmail,email, password, firstName, lastName,checkP])

  //check password and repassword
  useEffect(() => {
    if (password != rePassword) {
      setCheckP(false)
    } else {
      setCheckP(true)
    }
  },[password,rePassword])

  const onBlurEmail = (e) => {
    if(e.target.value == ""){
      setErrorEmail("Email can not be empty")
    }else if(!emailValidation(e.target.value)){
      setErrorEmail("Email invalid")
    }else{
      setErrorEmail("")
    }
  }

  const onBlurPassword = (e) => {
    if(e.target.value == ""){
      setPassState(false)
    }else{
      setPassState(true)
    }
  }

  const onBlurRePassword = (e) => {
    if(e.target.value == ""){
      setRPassState(false)
    }else{
      setRPassState(true)
    }
  }

  const onBlurFName = (e) => {
    if(e.target.value == ""){
      setFNameState(false)
    }else{
      setFNameState(true)
    }
  }

  const onBlurLName = (e) => {
    if(e.target.value == ""){
      setLNameState(false)
    }else{
      setLNameState(true)
    }
  }

  const onChangeRePass = (e) => {
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

  const onChangePass = (e) => {
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

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
    if(e.target.value == ""){
      setErrorEmail("Email can not be empty")
    }else if(!emailValidation(e.target.value)){
      setErrorEmail("Email is invalid")
    }else{
      setErrorEmail("")
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
            <TextField onChange={onChangeEmail} variant="outlined" label="Email" fullWidth 
            onBlur={onBlurEmail}
            error={errorEmail==""? false:true}
            helperText={errorEmail}/>
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
            <TextField onChange={onChangePass} variant="outlined" label="Password" type={hidePassword ? "password" : "text"} fullWidth
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
            <TextField onChange={onChangeRePass} variant="outlined" label="Confirm Password" type={hideCPassword ? "password" : "text"} fullWidth
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

        <Alert id='alert'sx={{ position: 'absolute', width: '15%'}} style={{top: 60, right: 10}} severity={afterSubmit? "":"error"}>{afterSubmit?"":"Email duplicate"}</Alert>

      </Container>
    </Box>
  );
}
