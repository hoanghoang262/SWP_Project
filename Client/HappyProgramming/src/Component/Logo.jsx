import { Link } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

export default function Logo({ sx, ...rest }) {
  const { pathname } = useLocation();
  const isAdmin = pathname.includes('/admin');
  return (
    <Link
      component={RouterLink}
      to={isAdmin ? '/admin' : '/'}
      variant="h2"
      sx={{
        textDecoration: 'none',
        color: 'grey.900',
        fontSize: 20,
        fontWeight: 600,
        ...sx,
      }}
      {...rest}
    >
      Happy Program
    </Link>
  );
}
