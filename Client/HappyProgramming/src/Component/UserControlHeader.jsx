import { Box, Typography } from '@mui/material';

export default function UserControlHeader({ user }) {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {user.name}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {user.email}
      </Typography>
    </Box>
  );
}
