import { Box, Typography, Container, Stack, Button } from '@mui/material';
import UserProfileForm from '../Component/UserProfileForm';

export default function Profile() {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Container maxWidth="md">
          <Stack spacing={3} direction="column">
            <Typography variant="h5" sx={{ fontSize: 20, fontWeight: 600 }}>
              User Profile
            </Typography>
            <Box
              sx={{ width: '100px', height: '100px', backgroundColor: 'coral' }}
            >
              <img
                width={'100px'}
                src="https://static.vecteezy.com/system/resources/previews/002/002/403/large_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
              />
            </Box>
            <UserProfileForm />
            <div>
              <Button variant="contained">Save</Button>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
