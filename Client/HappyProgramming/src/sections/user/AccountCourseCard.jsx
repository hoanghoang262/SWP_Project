import { Box, Card, Divider, Rating, Stack, Typography } from '@mui/material';
import Iconify from '../../Component/Iconify';

function CourseStepper({ step }) {
  if (step === 7) {
    return (
      <Box display="flex" sx={{ gap: 1 }}>
        <Box>
          <Iconify
            icon="akar-icons:circle-check-fill"
            sx={{ color: 'success.main' }}
          />
        </Box>
        <Typography sx={{ flexGrow: 1 }}>
          User have passed all assignment.
        </Typography>
      </Box>
    );
  }
  return (
    <Typography sx={{ flexGrow: 1 }}>
      <Typography
        component="span"
        fontWeight={500}
        sx={{ color: 'primary.main' }}
      >
        {step}
      </Typography>{' '}
      of{' '}
      <Typography component="span" fontWeight={500}>
        7
      </Typography>{' '}
      assignment completed.
    </Typography>
  );
}

export default function AccountCourseCard({ course }) {
  const { thumbnail, provider, process, rating } = course;
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
        sx={{ borderRadius: 1, width: 100, height: 100 }}
      />
      <Stack sx={{ flexGrow: 1 }} direction="column" spacing={1}>
        <Typography variant="caption">{provider}</Typography>
        <Typography
          variant="h6"
          fontWeight={500}
          sx={{ color: 'primary.main' }}
        >
          {course.title}
        </Typography>
        {course.isOnline && (
          <Typography variant="caption" sx={{ color: 'info.main' }}>
            This is an online course
          </Typography>
        )}
        <CourseStepper step={process} />
      </Stack>
      <Divider orientation="vertical" flexItem />
      <Stack
        sx={{ minWidth: 250, alignItems: 'center', justifyContent: 'center' }}
        directin="column"
        spcaing={1}
      >
        {rating && (
          <>
            <Typography variant="subtitle2">Rated:</Typography>
            <Rating size="large" value={rating} />
          </>
        )}
        {!rating && (
          <>
            <Typography variant="body2">
              User have not rate for this course
            </Typography>
          </>
        )}
      </Stack>
    </Card>
  );
}
