import {
  Menu,
  MenuItem,
  Typography,
  Avatar,
  Badge,
  Box,
  Card,
  IconButton,
  Stack,
} from '@mui/material';
import Logo from '../Component/Logo';
import Iconify from '../Component/Iconify';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function TopAppBar({ user }) {
  const { pathname } = useLocation();
  const isAdmin = pathname.includes('admin');

  let settings;
  if (isAdmin) {
    settings = ['Profile', 'Dashboard', 'Logout'];
  } else {
    settings = ['Profile', 'Courses', 'Logout'];
  }

  const { avatarUrl } = user;

  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleSelectItem = (value) => {
    switch (value) {
      case 'Profile':
        navigate('/profile');
        break;
      case 'Dashboard':
        navigate('/admin');
        break;
      case 'Courses':
        navigate('/course');
        break;
      case 'Logout':
        navigate('/sign-in');
        break;

      default:
        break;
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Card
      elevation={1}
      sx={{
        position: 'fixed',
        right: 0,
        top: 0,
        width: '100%',
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        zIndex: 2,
        display: 'flex',
        height: '80px',
      }}
    >
      <Logo sx={{ pl: 3 }} />
      <Stack direction="row" sx={{ pr: 3 }} alignItems="center" spacing={5}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={1}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton color="primary">
              <Badge badgeContent={4} color="error">
                <Iconify
                  icon="bx:message-detail"
                  sx={{ color: 'primary.main', width: 24, height: 24 }}
                />
              </Badge>
            </IconButton>
            <IconButton color="primary">
              <Iconify
                icon="ci:notification-outline"
                sx={{ color: 'primary.main', width: 24, height: 24 }}
              />
            </IconButton>
          </Stack>
          <Avatar
            src={avatarUrl}
            sx={{ cursor: 'pointer', height: 52, width: 52 }}
            onClick={handleOpenUserMenu}
          />
          <Menu
            sx={{ mt: '45px' }}
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={() => handleSelectItem(setting)}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Stack>
    </Card>
  );
}
