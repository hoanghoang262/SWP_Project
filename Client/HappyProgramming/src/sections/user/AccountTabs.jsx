import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useState } from 'react';
import AccountAvatarDetail from './AccountAvatarDetail';
import AccountDetail from './AccountDetail';
import Iconify from '../../Component/Iconify';
import AccountCourse from './AccountCourse';

const TABS = [
  {
    value: '1',
    icon: 'ic:baseline-account-circle',
    label: 'Account',
    component: <AccountDetail />,
  },
  {
    value: '2',
    icon: 'bx:book',
    label: 'Course',
    component: <AccountCourse />,
  },
  // {
  //   value: '3',
  //   icon: 'bi:share-fill',
  //   label: 'Social Links',
  //   component: <AccountAvatarDetail />,
  // },
];

export default function AccountTabs() {
  const [value, setValue] = useState('1');

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <TabList onChange={handleChange}>
          {TABS.map(({ label, value, icon }, index) => (
            <Tab
              icon={<Iconify icon={icon} sx={{ width: 20, height: 20 }} />}
              iconPosition="start"
              sx={{ paddingX: 3, paddingY: 0 }}
              label={label}
              value={value}
              key={index}
            />
          ))}
        </TabList>
        {TABS.map(({ value, component }, index) => (
          <TabPanel sx={{ paddingX: 0 }} key={`${index}`} value={value}>
            {component}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
