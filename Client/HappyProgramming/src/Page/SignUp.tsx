import { Box, Button, Container, Link, Stack, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ActionBar from '../Component/ActionBar';

export default function SignUp() {
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
            <TextField variant="outlined" label="Email" fullWidth />
            <Box display="flex" sx={{ gap: 1 }}>
              <TextField variant="outlined" label="First name" fullWidth />
              <TextField variant="outlined" label="Last name" fullWidth />
            </Box>
            <TextField variant="outlined" label="Password" type="password" fullWidth />
            <TextField variant="outlined" label="Confirm password" type="password" fullWidth />
          </Stack>
          <Button variant="contained" sx={{ height: 50 }}>
            Sign Up
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
