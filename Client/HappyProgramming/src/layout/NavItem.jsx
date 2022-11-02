import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NavItem({ active = false, text, route, icon }) {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => navigate(route)}
      sx={{
        px: 3,
        py: 1,
        backgroundColor: active ? 'primary.light' : 'transparent',
        cursor: 'pointer',
        '&:hover': { backgroundColor: 'primary.dark' },
        '&:hover .nav-icon': { display: 'block' },
        '.nav-icon': { display: 'none' },
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          height: '20px',
          color: active ? 'black' : 'white',
        }}
      >
        {text}
      </Typography>
      <Box className="nav-icon" sx={{ height: '20px' }}>
        {icon}
      </Box>
    </Box>
  );
}
