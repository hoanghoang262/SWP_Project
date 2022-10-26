import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { TextField, Button, Box, Grid, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import Iconify from '../Component/Iconify';
import { useState, useEffect } from 'react'
import { emailValidation } from '../Component/Validation'

function SectionTitle({ display, title, subtitle, icon }) {
  return (
    <Box display="flex" gap={1}>
      <Box width="24px">{icon}</Box>
      <Stack spacing={1}>
        <Typography color="grey.200" fontWeight={500}>
          {display}
        </Typography>
        <Typography color="grey.300" fontSize={13}>
          {title}
        </Typography>
        <Typography color="grey.200" variant="body2">
          {subtitle}
        </Typography>
      </Stack>
    </Box>
  );
}

export default function Contact() {
  const [emailState, setEmailState] = useState(true)
  const [nameState, setNameState] = useState(true)
  const [phoneState, setPhoneState] = useState(true)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [submitState, setSubmitState] = useState(false)
  const [emailValidationState, setEmailValidationState] = useState(true)

  //co the submit neu phone, name va email khong null
  useEffect(()=>{
    if(email!= ""&&phone!= ""&&name!= ""){
      setSubmitState(true)
    }
    else{
      setSubmitState(false)
    }

  }, [email, phone, name])


  const onFacebookIconClick = () => {
    console.log('Facebook icon clicked');
  };

  const onTwitterIconClick = () => {
    console.log('Twitter icon clicked');
  };

  const onLinkedinIconClick = () => {
    console.log('Linkedin icon clicked');
  };

  const onYoutubeIconClick = () => {
    console.log('Youtube icon clicked');
  };

  const checkPhone= (e) => {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    alphabet.forEach(element => {
      if(e.target.value.includes(element)){
         setPhoneState(false)
      }
    });
  }

  const phoneNumberChange = (e) => {
    setPhone(e.target.value)

    
  }

  const onBlurEmail = (e) => {
    if(e.target.value == ""){
      setEmailState(false)
    }else{
      setEmailState(true)
    }
    
  }

  const onBlurName = (e) =>{
    if(e.target.value == ""){
      setNameState(false)
    }else{
      setNameState(true)
    }
  }

  const onBlurPhone = (e) =>{
    if(e.target.value == ""){
      setPhoneState(false)
    }else{
      setPhoneState(true)
    }
    checkPhone(e)
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
    setEmailValidationState(emailValidation(e.target.value))
  }

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Stack spacing={5} sx={{ backgroundColor: 'primary.main', minHeight: '100vh' }}>
            <Link
              component={RouterLink}
              to="/"
              variant="h2"
              sx={{
                textDecoration: 'none',
                m: 3,
                color: 'white',
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              
            </Link>
            <Stack spacing={3} sx={{ flexGrow: 1, padding: 5 }}>
              <Typography variant="h4" color="grey.200" sx={{ fontWeight: 600 }}>
                Get in touch
              </Typography>
              <Typography variant="body2" color="grey.200">
                We've love to hear from you. Our friendly team is always here to chat
              </Typography>
              <SectionTitle
                icon={<MailOutlineIcon sx={{ color: 'grey.200' }} />}
                display="Chat to us"
                title={'Our friendly team is here to help.'}
                subtitle={'hi@happyprogram.com'}
              />
              <SectionTitle
                icon={<LocationOnOutlinedIcon sx={{ color: 'grey.200' }} />}
                display="Office"
                title={'Come and say hello to our office.'}
                subtitle={'Vinhomes Ocean Park, Da Ton, Gia Lam, Ha Noi'}
              />
              <SectionTitle
                icon={<LocalPhoneOutlinedIcon sx={{ color: 'grey.200' }} />}
                display="Phone"
                title={'Mon-Fri from 8am to 5pm.'}
                subtitle={'+84 366 778 899'}
              />
            </Stack>
            <Stack p={3} spacing={2} direction="row" justifyContent="end">
              <Iconify
                icon="akar-icons:facebook-fill"
                sx={{ color: 'grey.200', cursor: 'pointer' }}
                onClick={onFacebookIconClick}
              />
              <Iconify
                icon="akar-icons:twitter-fill"
                sx={{ color: 'grey.200', cursor: 'pointer' }}
                onClick={onTwitterIconClick}
              />
              <Iconify
                icon="akar-icons:linkedin-box-fill"
                sx={{ color: 'grey.200', cursor: 'pointer' }}
                onClick={onLinkedinIconClick}
              />
              <Iconify
                icon="bxl:youtube"
                sx={{ color: 'grey.200', cursor: 'pointer' }}
                width={24}
                height={24}
                onClick={onYoutubeIconClick}
              />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box display="flex" alignItems={'center'} justifyContent="center">
            <Stack spacing={4} sx={{ my: '100px' }}>
              <Stack spacing={3}>
                <Typography variant="h4" color="grey.800" sx={{ fontWeight: 600 }}>
                  Level up your brand
                </Typography>
                <Typography component="span">
                  You can reach us any time via{' '}
                  <Typography color="primary" component="span">
                    hi@happyprogram.com
                  </Typography>
                </Typography>
              </Stack>
              <Stack spacing={3}>
                <TextField variant="outlined" label="Name"
                onChange={(e)=>setName(e.target.value)}
                onBlur={onBlurName}
                error={nameState? false : true}
                helperText={nameState? "":"Name can not be empty"} />
                <TextField variant="outlined" label="Email" 
                onChange={onChangeEmail}
                onBlur={onBlurEmail}
                error={emailState&&emailValidationState? false : true}
                helperText={emailState? (emailValidationState? "":"Not an email"):"Email can not be empty"}/>
                <TextField variant="outlined" label="Phone number" 
                onChange={(e)=>phoneNumberChange(e)}
                onBlur={onBlurPhone}
                error={phoneState? false:true}
                helperText={phoneState? "":"phone number can not be empty or have alphabet"}/>
                <TextField variant="outlined" label="How can we help?" multiline rows={4} />
              </Stack>
              <Button variant="contained" disabled={submitState? false:true} fullWidth sx={{ height: '50px' }}>
                Get started
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
