import { Card, Divider, Stack } from '@mui/material';
import Iconify from '../components/Iconify';
import Logo from '../components/Logo';
import NavItem from './NavItem';
import { NAVBAR_WIDTH } from '../config';

const NAV_ITEMS = [
  {
    icon: <Iconify icon="bxs:user-detail" sx={{ color: 'white' }} />,
    text: 'User',
    route: '/admin/user',
  },
  {
    icon: <Iconify icon="bx:book" sx={{ color: 'white' }} />,
    text: 'Course',
    route: '/admin/course',
  },
];

export default function NavbarVertical() {
  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: 0,
        zIndex: 3,
        backgroundColor: 'primary.main',
        p: 3,
        minWidth: `${NAVBAR_WIDTH}px`,
        position: 'fixed',
        minHeight: '100%',
      }}
    >
      <Stack spacing={4}>
        <Logo sx={{ color: 'white' }} />
        <Divider sx={{ borderBottomWidth: '2px' }} />
        <Stack>
          {NAV_ITEMS.map((item, index) => (
            <NavItem
              key={`${index}`}
              text={item.text}
              route={item.route}
              icon={item.icon}
            />
          ))}
          <Divider variant="middle" />
          <NavItem
            text="Logout"
            route="/sign-in"
            icon={<Iconify icon="akar-icons:door" sx={{ color: 'white' }} />}
          />
        </Stack>
      </Stack>
    </Card>
  );
}
