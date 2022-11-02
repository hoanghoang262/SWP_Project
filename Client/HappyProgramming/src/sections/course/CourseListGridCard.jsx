import { Box, Card, Link, Rating, Stack, Typography } from '@mui/material';
import { format } from 'date-fns';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Iconify from '../../Component/Iconify';

export default function CourseListGridCard({ course }) {
  const { id, start, rating, thumbnail, isOnline, title, price, provider } =
    course;
  const { pathname } = useLocation();
  const isAdmin = pathname.includes('admin');

  return (
    <Card sx={{ p: 2 }} elevation={6}>
      <Stack direction="column" spacing={1}>
        <Box
          component="img"
          src={thumbnail}
          sx={{ mb: 1, borderRadius: 1, width: '244px', height: '244px' }}
        />
        <Link
          component={RouterLink}
          to={`${isAdmin ? '/admin' : ''}/course/${id}`}
          variant="subtitle1"
          fontWeight={500}
          lineHeight={'20px'}
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
        <Typography variant="body2">{provider}</Typography>
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
        {/* rating chua lam  */}
        {rating && (
          <>
            <Rating size="small" value={rating} />
          </>
        )}
        {!rating && (
          <>
            <Typography variant="body2">
              No one has rated for this course yet
            </Typography>
          </>
        )}
        <Box display="flex" aligItems="center">
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

          <Typography variant="body1" textTransform="uppercase">
            {`$${price}`}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
}
