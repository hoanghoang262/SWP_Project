import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import {useLocation} from 'react-router-dom';

function VerifyEmail(){
    const location = useLocation();

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
                <Typography variant='h3' sx={{fontWeight: 600, margin: 'auto',textAlign: 'center',padding:'4%'}}>Hi,{location.state.name}</Typography>
                <Typography sx={{textAlign:'center', paddingX: '10%'}}>We have received your request and we are modeling your account, please log in your email
                 account and verify your account, unless your want to abort the process </Typography>
                 <Box sx={{backgroundColor: '#fcfaf2', marginY: '5%', height: 120, marginX: '10%', display:'flex' ,justifyContent: 'center',
                alignItems: 'center'}}>
                 <Button variant="contained" sx={{margin:'auto'}}>Dont verify my account</Button>
                 </Box>
                 <Typography sx={{textAlign:'center', paddingX: '10%'}}>Thank you for intrust and using our service, see you later </Typography>
             </Box>
        </div>
    )
}

export default VerifyEmail