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
  Alert
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import ActionBar from '../Component/ActionBar'
import { BiShow, BiHide } from "react-icons/bi";
import { checkSignIn } from "../Api/Authentication"
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userInfoState } from '../Recoil/Atom';
import { emailValidation } from '../Component/Validation'
import { findAccByEmai, signUp } from '../Api/Authentication';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [emailState, setEmailState] = useState(true);
  const [password, setPassword] = useState('');
  const [passState, setPassState] = useState(true);
  const [hidePassword, setHidePassword] = useState(true);
  const [submitState, setSubmitState] = useState(false);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [emailValidationState, setEmailValidationState] = useState(true)
  const [errorEmail, setErrorEmail] = useState("");
  const [alarmMessage, setAlarmMessage] = useState(null)
  const navigate = useNavigate();
  //submid sign in
  const submit = () => {
    checkSignIn(email, password, (inputData) => {
      if (inputData == null || inputData.email == null || inputData == []) {
        console.log("Sign in deline");
        setAlarmMessage(<Alert id='alert' sx={{ position: 'absolute', width: '15%' }} style={{ bottom: 50, right: 0 }} severity='warning'>Sign in deline</Alert>)
        setTimeout(() => {
          setAlarmMessage(null)
        }, 3000)
      } else {
        if (inputData.ban == true) {
          console.log("This acc is baned")
          setAlarmMessage(<Alert id='alert' sx={{ position: 'absolute', width: '15%' }} style={{ bottom: 50, right: 0 }} severity='warning'>You have been banned</Alert>)
          setTimeout(() => {
            setAlarmMessage(null)
          }, 3000)
        } else if (inputData.verified == false) {
          console.log("This acc didnt verify")
          setAlarmMessage(<Alert id='alert' sx={{ position: 'absolute', width: '15%' }} style={{ bottom: 50, right: 0 }} severity='warning'>You havent verify</Alert>)
          setTimeout(() => {
            setAlarmMessage(null)
          }, 3000)
          findAccByEmai({ email: email }, (outputData) => {
            navigate("/verifyEmail", {
              state: {
                data: outputData,
                email: email
              }
            })
          });
        }
        else {
          console.log("Sign in success");
          setUserInfo(inputData);
          navigate("/");
        }
      }
    });
  }

  //check submit state
  useEffect(() => {
    if (errorEmail == "" && email != "" && password != "") {
      setSubmitState(true)
    } else {
      setSubmitState(false)
    }
  }, [errorEmail, email, password])


  //set email state message
  const onBlurEmail = (e) => {
    if (e.target.value == "") {
      setErrorEmail("Email can not be empty");
    } else if (!emailValidation(e.target.value)) {
      setErrorEmail("Email invalid")
    }
    else {
      setErrorEmail("");;
    }
  }

  const onBlurPassword = (e) => {
    if (e.target.value == "") {
      setPassState(false)
    } else {
      setPassState(true)
    }
  }

  //onchange email value
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
    if (e.target.value == "") {
      setErrorEmail("Email can not be empty");
    } else if (!emailValidation(e.target.value)) {
      setErrorEmail("Email invalid")
    } else {
      setErrorEmail("")
    }
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
            <TextField onBlur={(e) => onBlurEmail(e)}
              onFocus={() => { setEmailState(true) }}
              error={errorEmail == "" ? false : true}
              helperText={errorEmail}
              onChange={onChangeEmail}
              variant="outlined" label="Email" fullWidth autoFocus
              inputProps={{
                form: {
                  autocomplete: 'off',
                },
              }} />
            <TextField onChange={(e) => setPassword(e.target.value)} variant="outlined" label="Password" type={hidePassword ? "password" : "text"} fullWidth
              onBlur={onBlurPassword}
              error={passState ? false : true}
              helperText={passState ? "" : "Password can not empty"}
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
          <Button disabled={submitState ? false : true} onClick={submit} variant="contained" sx={{ height: 50 }}>
            Sign In
          </Button>
        </Stack>
        {alarmMessage}
      </Container>
    </Box>
  );
}