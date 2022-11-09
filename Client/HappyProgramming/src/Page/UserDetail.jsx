import { Switch, Container, FormControlLabel, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserInfoById } from '../Api/userManager.js';
import HeaderBreadcrumbs from '../Component/HeaderBreadcrumbs';
import { UserContext } from '../context/UserContext';
import AccountTabs from '../sections/user/AccountTabs';
import { _userList } from '../_mock/_user';

export default function UserDetail() {
  const { id = '' } = useParams();
  const [userData,setUserData] = useState(null)
  useEffect(()=>{
    getUserInfoById(id,(res)=>{
      setUserData(res)
    })
  },[])
  if(userData){
    return (
      <UserContext.Provider value={userData}>
        <Container maxWidth="lg" sx={{ mt: 5 }}>
          <Stack>
            <HeaderBreadcrumbs
              heading={userData.firstName}
              links={[
                { name: 'Dashboard', href: '/' },
                { name: 'User', href: '/admin/user' },
                { name: userData.firstName },
              ]}
              action={<FormControlLabel label="Edit" labelPlacement="start" control={<Switch />} />}
            />
            <AccountTabs />
          </Stack>
        </Container>
      </UserContext.Provider>
    );
  }else{
    return(
      <h1>Loading</h1>
    )
  }
}
