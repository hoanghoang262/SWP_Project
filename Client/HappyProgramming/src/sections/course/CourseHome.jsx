import {
  InputAdornment,
  Box,
  TextField,
  Container,
  Typography,
} from '@mui/material';
import Iconify from '../../Component/Iconify';

export default function CourseHome() {
  return (
    <Box
      height={450}
      width="100%"
      sx={{
        backgroundImage: 'url("/wallpaper_filter.jpg")',
        backgroundSize: 'cover',
      }}
    >
      <Box component={Container} maxWidth="lg">
        <Typography
          variant="h2"
          fontWeight={700}
          sx={{ color: 'white', pt: 10 }}
        >
          Take the world's best courses, online, for free.
        </Typography>
        <TextField
          size="small"
          sx={{
            backgroundColor: 'grey.200',
            borderRadius: 1,
            mt: 5,
            minWidth: 400,
            // border: 2,
            // borderColor: 'primary',
            // borderStyle: 'solid',
            '& *': {
              border: 'none',
            },
          }}
          placeholder="What would you like to learn about?"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Iconify icon="bx:search-alt-2" />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
}
