import {
  Box,
  Button,
  Divider,
  IconButton,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import { format } from 'date-fns';
import { useContext } from 'react';
import Iconify from '../../Component/Iconify';
import { CourseContext } from '../../context/CourseContext';
import { randomNumberRange } from '../../_mock/_funcs';

export default function CourseOverview() {
  const { provider, title, description, price, rating, start, thumbnail } =
    useContext(CourseContext);
  return (
    <Box>
      <Stack direction="row" spacing={3}>
        <Box
          component="img"
          src={thumbnail}
          alt="thumbnail"
          sx={{ width: 260, height: 260, borderRadius: 1, objectFit: 'cover' }}
        />
        <Stack spacing={2}>
          <Box display="flex">
            {rating && (
              <>
                <Rating value={rating} />
                <Typography
                  variant="body2"
                  fontWeight={600}
                  sx={{ color: 'orange', ml: 1 }}
                >
                  {' '}
                  {rating}
                </Typography>
                <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {randomNumberRange(10, 100)} reviews
                </Typography>
              </>
            )}
          </Box>
          <Typography variant="body2">{provider}</Typography>
          <Typography
            sx={{ color: 'primary.main', ml: 3 }}
            variant="h3"
            fontWeight={600}
          >
            ${price}
          </Typography>
          <Typography variant="h5" fontWeight={500}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </Stack>
      </Stack>
      <Stack spacing={3} mt={1}>
        <Box display="flex" alignItems="start" justifyContent="space-between">
          <Stack spacing={'2px'} direction="row">
            <IconButton>
              <Iconify icon="akar-icons:facebook-fill" />
            </IconButton>
            <IconButton>
              <Iconify icon="ant-design:instagram-filled" />
            </IconButton>
            <IconButton>
              <Iconify icon="akar-icons:linkedin-box-fill" />
            </IconButton>
            <IconButton>
              <Iconify icon="akar-icons:twitter-fill" />
            </IconButton>
          </Stack>
          <Button sx={{ mt: 2 }} variant="contained">
            <Box px={2.5} py={1}>
              <Typography fontWeight={600} textTransform="capitalize">
                Enroll now
              </Typography>
              <Typography
                sx={{ color: 'grey.300' }}
                variant="caption"
                fontWeight={300}
                textTransform="capitalize"
              >
                Start on {format(start, 'MMM do')}
              </Typography>
            </Box>
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
