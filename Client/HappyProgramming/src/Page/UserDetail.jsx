import { Switch, Container, FormControlLabel, Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getUserInfoById } from '../Api/userManager.js';
import HeaderBreadcrumbs from '../Component/HeaderBreadcrumbs';
import { UserContext } from '../context/UserContext';
import AccountTabs from '../sections/user/AccountTabs';
import { _userList } from '../_mock/_user';

export default function UserDetail() {
  const { id = '' } = useParams();
  console.log("id",id)
  const _user = getUserInfoById(id)
  return (
    <UserContext.Provider value={_user}>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Stack>
          <HeaderBreadcrumbs
            heading={_user.name}
            links={[
              { name: 'Dashboard', href: '/' },
              { name: 'User', href: '/admin/user' },
              { name: _user.name },
            ]}
            action={<FormControlLabel label="Edit" labelPlacement="start" control={<Switch />} />}
          />
          <AccountTabs />
        </Stack>
      </Container>
    </UserContext.Provider>
  );
}
