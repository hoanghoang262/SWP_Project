import { Box } from '@mui/material';
import Iconify from '../Component/Iconify';

export default function LayoutSwitch({ active, onChange }) {
  return (
    <Box
      display="flex"
      p={0.5}
      sx={{
        borderRadius: 1,
        border: 1,
        borderColor: 'grey.300',
        borderStyle: 'solid',
      }}
    >
      <Box
        onClick={() => onChange('grid')}
        variant={active === 'grid' ? 'contained' : 'text'}
        sx={{
          cursor: 'pointer',
          borderRadius: 1,
          p: 0.5,
          '&:hover': { backgroundColor: 'grey.100' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '24px',
          height: '24px',
        }}
      >
        <Iconify icon="bx:bxs-grid" />
      </Box>
      <Box
        onClick={() => onChange('list')}
        variant={active === 'list' ? 'contained' : 'text'}
        sx={{
          cursor: 'pointer',
          borderRadius: 1,
          p: 0.5,
          '&:hover': { backgroundColor: 'grey.100' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '24px',
          height: '24px',
        }}
      >
        <Iconify icon="bi:list" />
      </Box>
    </Box>
  );
}
