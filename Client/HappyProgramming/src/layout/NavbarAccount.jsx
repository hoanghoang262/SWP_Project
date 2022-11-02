import { Box, Avatar, Typography, Stack } from '@mui/material';

export default function NavbarAccount() {
  return (
    <Box
      sx={{
        paddingX: 4,
        paddingY: 2,
        display: 'flex',
        backgroundColor: 'grey.100',
        borderRadius: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <Avatar sx={{ width: 40, height: 40, mr: 4 }} />
      <Stack direction="column" sx={{ textAlign: 'left' }}>
        <Typography variant="subtitle2">John Doe</Typography>
        <Typography variant="body1" sx={{ color: 'grey.500' }}>
          Admin
        </Typography>
      </Stack>
    </Box>
  );
}
