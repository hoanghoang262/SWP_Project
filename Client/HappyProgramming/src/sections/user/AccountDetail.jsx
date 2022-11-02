import { Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import AccountAvatarDetail from './AccountAvatarDetail';
import AccountForm from './AccountForm';

export default function AccountDetail() {
  const { pathname } = useLocation();
  const isNew = pathname.includes('new');
  return (
    <Grid direction="row" spacing={2} container>
      <Grid item xs={12} md={4}>
        <AccountAvatarDetail isNew={isNew} />
      </Grid>
      <Grid item xs={12} md={8}>
        <AccountForm isNew={isNew} />
      </Grid>
    </Grid>
  );
}
