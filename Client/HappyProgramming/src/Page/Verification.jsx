import { Box, Container, Stack, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ActionBar from '../components/ActionBar';
import InputCode from '../components/InputCode';

export default function ForgotPassword() {
  const [countdown, setCountdown] = useState(60);
  const [expired, setExpired] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const counter = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
      if (countdown === 0) {
        setExpired(true);
      }
    }, 1000);

    return () => {
      clearInterval(counter);
    };
  }, [countdown]);

  const onResendClick = useCallback(() => {
    setCountdown(60);
  }, []);

  return (
    <Box m={3}>
      <ActionBar />
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          marginTop: { xs: '100px', md: '200px' },
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Stack spacing={5}>
          <Stack spacing={2}>
            <Typography variant="h3" sx={{ color: 'black.800', fontSize: 32, fontWeight: 600 }}>
              Enter verification code
            </Typography>
            <Typography component="span" sx={{ color: 'grey.500' }}>
              We've sent verification code to{' '}
              <Typography component="span" sx={{ color: 'info.main' }}>
                johndoe0210@gmail.com
              </Typography>
            </Typography>
          </Stack>
          <Box
            component={InputCode}
            length={6}
            onComplete={(code) => {
              setInterval(() => {
                navigate('/');
              }, 1000);
            }}
          />
          <Box display="flex" justifyContent="space-between">
            <Typography color={expired ? 'error.main' : 'grey.500'}>
              Expired in {countdown === 60 ? '1:00m' : '0:' + countdown + 's'}
            </Typography>
            <Typography
              onClick={onResendClick}
              sx={{ textDecoration: 'none', color: 'info.main', cursor: 'pointer' }}
            >
              resend
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
