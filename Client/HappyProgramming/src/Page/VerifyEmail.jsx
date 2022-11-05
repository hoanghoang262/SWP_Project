import { IosShare } from '@mui/icons-material';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { resendEmail } from '../Api/Authentication';

function VerifyEmail(){
    const location = useLocation();
    const navigate = useNavigate();

    const resendEmailToken = () =>{
        resendEmail(location.state.data,(outputData) => {
            if(outputData != null){
                console.log("email is sended")
            }else{
                console.log("err")
            }
        })
    }

    return(
        <div>
            <Box sx={{width: 1, height: 350,
             backgroundColor: '#4488fc'
             }}><Typography variant='h4'
                 sx={{
                    color: 'white',
                    paddingTop: '5%',
                    fontWeight: 600,
                    textAlign: 'center'
                 }}>
                Happy Programming
                </Typography></Box>
             <Box sx={{width: 1, height: 602,
             backgroundColor: '#fcfaf2'
             }}></Box>
             <Box sx={{
                position: 'absolute',
                marginX: '27%',
                width: '45%',
                backgroundColor: 'white',
                height: 500,
                top: '25%',
                borderRadius: '10%',
                justifyContent: 'center',
                alignItems: 'center'
             }}>
                <Typography variant='h3' sx={{fontWeight: 600, margin: 'auto',textAlign: 'center',padding:'4%'}}>Hi,{location.state.data.firstName + location.state.data.lastName}</Typography>
                <Typography sx={{textAlign:'center', paddingX: '10%'}}>We have received your request and we are modeling your account, please log in your email
                 account and verify your account, unless your want to abort the process </Typography>
                 <Box sx={{backgroundColor: '#fcfaf2', marginY: '5%', height: 120, marginX: '10%', display:'flex' ,justifyContent: 'center',
                alignItems: 'center'}}>
                 <Button onClick={resendEmailToken} variant="contained" sx={{margin:'auto'}}>Resend Email</Button>
                 </Box>
                 <Typography sx={{textAlign:'center', paddingX: '10%'}}>Thank you for intrust and using our service, see you later </Typography>
                 <Button onClick={() => {navigate("/")}} variant="contained" sx={{marginLeft: '68%', marginTop: '5%'}}>Back to home</Button>
             </Box>
        </div>
    ) 
}

export default VerifyEmail