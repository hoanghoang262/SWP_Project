import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import TopAppBar from '../Component/TopAppBar';
import { _userList } from '../_mock/_user';

export default function UserLayout() {
  const user = _userList[1];


  return (
    <>
      <TopAppBar user={user} />
      <Box mt={`${80}px`}>
        <Outlet />
      </Box>
    </>
  );
}
