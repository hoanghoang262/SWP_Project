import {
  Avatar,
  Card,
  Box,
  FormControlLabel,
  Stack,
  Typography,
  Button,
} from '@mui/material';
import { pascalCase } from 'change-case';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import Iconify from '../../Component/Iconify';

export default function AccountAvatarDetail({ isNew }) {
  const _user = useContext(UserContext);
  return (
    <Card elevation={6} sx={{ p: 5 }}>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Avatar src={_user.avatarUrl} sx={{ width: 100, height: 100 }} />
        {isNew && (
          <Typography variant="caption" sx={{ textAlign: 'center' }}>
            Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3.1 MB
          </Typography>
        )}
        {!isNew && (
          <Box>
            <Typography variant="subtitle2" sx={{ textAlign: 'center' }}>
              {_user.role
                .split(' ')
                .map((word) => pascalCase(word))
                .join(' ')}
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              sx={{ textAlign: 'center' }}
            >
              {_user.name}
            </Typography>
          </Box>
        )}

        {!isNew && (
          <FormControlLabel
            label={<Typography variant="body2">Verified</Typography>}
            labelPlacement="start"
            control={
              <>
                {_user.isVerified && (
                  <Iconify
                    icon="akar-icons:check"
                    sx={{ color: 'success.main' }}
                  />
                )}
                {!_user.isVerified && (
                  <Iconify icon="clarity:window-close-line" />
                )}
              </>
            }
          />
        )}
        <Box>
        <Button sx={{marginX: "10px", }} color='warning' variant="contained">Mute User</Button> 
        <Button sx={{marginX: "10px",}} color='error' variant="contained">Ban User</Button>
        </Box>
      </Stack>
    </Card>
  );
}
