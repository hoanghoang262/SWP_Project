import { Box, Card, TextField } from '@mui/material';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export default function AccountForm({ isNew }) {
  const _user = useContext(UserContext);

  return (
    <Card elevation={6} sx={{ p: 3 }}>
      <Box
        display="grid"
        sx={{
          gridTemplateColumns: { xs: 'auto', md: 'auto auto' },
          gap: 3,
        }}
      >
        <TextField
          variant="outlined"
          label="Name"
          value={_user.name}
          fullWidth
        />
        <TextField
          variant="outlined"
          label="Role"
          value={_user.role}
          fullWidth
        />
        <TextField
          variant="outlined"
          label="Email"
          value={_user.email}
          fullWidth
        />
        <TextField
          variant="outlined"
          label="Phone Number"
          value={_user.phoneNumber}
          fullWidth
        />
        <TextField
          variant="outlined"
          label="Address"
          value={_user.address}
          fullWidth
        />
        <TextField
          variant="outlined"
          label="Country"
          value={_user.country}
          fullWidth
        />
        <TextField
          variant="outlined"
          label="Region"
          value={_user.state}
          fullWidth
        />
        <TextField
          variant="outlined"
          label="City"
          value={_user.city}
          fullWidth
        />
        <TextField
          variant="outlined"
          label="Zip code"
          value={_user.zipCode}
          fullWidth
        />
        <TextField
          variant="outlined"
          label="Country"
          value={_user.country}
          fullWidth
        />
      </Box>
    </Card>
  );
}
