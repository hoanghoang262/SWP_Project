import { Box, TextField } from '@mui/material';

export default function SearchToolbar(props) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
      <TextField variant="outlined" {...props}  />
    </Box>
  );
}
