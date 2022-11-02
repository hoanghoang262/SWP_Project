import {
  Link,
  Box,
  Card,
  Divider,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import { format } from 'date-fns';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Iconify from '../../Component/Iconify';
import { randomInArray } from '../../_mock/_funcs';

export default function CourseListListCard({ course }) {
  const {
    id,
    title,
    price,
    thumbnail,
    provider,
    description,
    isOnline,
    rating,
    start,
  } = course;
  const { pathname } = useLocation();
  const isAdmin = pathname.includes('admin');
  return (
    <Card
      sx={{ p: 3 }}
      component={Stack}
      direction="row"
      spacing={2}
      elevation={6}
    >
      <Box
        component="img"
        src={thumbnail}
        sx={{ borderRadius: 1, width: 120, height: 120 }}
      />
      <Stack sx={{ flexGrow: 1 }} direction="column" spacing={1}>
        <Typography variant="caption">{provider}</Typography>
        <Link
          component={RouterLink}
          to={`${isAdmin ? '/admin' : ''}/course/${id}`}
          variant="h6"
          fontWeight={500}
          sx={{
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
            color: 'primary.main',
          }}
        >
          {title}
        </Link>
        <Typography variant="caption" component="span">
          Start on{' '}
          <Typography
            variant="body2"
            component="span"
            fontWeight={500}
            sx={{ color: 'primary.main' }}
          >
            {format(start, 'MMM do, yyyy')}
          </Typography>
        </Typography>
        <Typography variant="body2">{description}</Typography>

        <Box
          component="span"
          display="flex"
          sx={{ flexGrow: 1, gap: 1, alignItems: 'center' }}
        >
          {isOnline && (
            <>
              <Iconify
                icon="ic:baseline-online-prediction"
                sx={{ color: 'info.main' }}
              />
              <Typography variant="body2"> Online</Typography>
            </>
          )}
          {!isOnline && (
            <>
              <Iconify
                icon="heroicons-outline:status-offline"
                sx={{ color: 'grey.600' }}
              />
              <Typography variant="body2"> Offline</Typography>
            </>
          )}
        </Box>
      </Stack>
      <Divider orientation="vertical" flexItem />
      <Stack
        sx={{ minWidth: 250, alignItems: 'center', justifyContent: 'center' }}
        directin="column"
        spcaing={1}
      >
        {rating && (
          <>
            <Typography variant="h5">${price}</Typography>
            <Typography variant="subtitle2">
              Rated by {randomInArray(['10+', '25+', '50+', '100+', '1000+'])}{' '}
              user:
            </Typography>
            <Rating size="large" value={rating} />
          </>
        )}
        {!rating && (
          <>
            <Typography variant="h5">${price}</Typography>
            <Typography variant="body2">
              No one has rated for this course yet.
            </Typography>
          </>
        )}
      </Stack>
    </Card>
  );
}
