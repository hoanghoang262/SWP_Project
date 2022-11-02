import { Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function ActionBar(props) {
  const { children } = props;

  return (
    <Box justifyContent="space-between" display="flex">
      <Link
        component={RouterLink}
        to="/"
        variant="h2"
        sx={{ textDecoration: 'none', color: 'grey.900', fontSize: 20, fontWeight: 600 }}
      >
        Happy Program
      </Link>
      {children}
    </Box>
  );
}
