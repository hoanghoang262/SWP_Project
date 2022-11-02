import { Box, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { NAVBAR_WIDTH } from '../config';
import { _userList } from '../_mock/_user';
import NavbarVertical from './NavbarVertical';
import TopAppBar from '../Component/TopAppBar';

export default function AdminLayout() {
  const _user = _userList[0];

  return (
    <Box width="100%" height="100%">
      <Stack direction="row">
        <NavbarVertical />
        <Stack sx={{ flexGrow: 1 }}>
          <TopAppBar user={_user} />
          <Box pb={10} mt={'80px'} ml={`${NAVBAR_WIDTH}px`}>
            <Outlet />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
