import { Container, Typography, Box, Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import HeaderBreadcrumbs from '../Component/HeaderBreadcrumbs';
import { CourseContext } from '../context/CourseContext';
import { _courseList } from '../_mock/_course';
import CourseOverview from '../sections/course/CourseOverview';
import CourseDescription from '../sections/course/CourseDescription';

export default function CoursePage() {
  const { id = '' } = useParams();
  const _course = _courseList.find((item) => item.id === id);
  const { title } = _course;
  return (
    <>
      <CourseContext.Provider value={_course}>
        <Box sx={{ mb: 5, backgroundColor: 'primary.main' }}>
          <Container maxWidth="lg">
            <Stack pt={5}>
              <HeaderBreadcrumbs
                mode="dark"
                heading={title}
                links={[
                  //   { name: 'Dashboard' },
                  { name: 'Course', href: '/course' },
                  { name: title },
                ]}
              />
            </Stack>
          </Container>
        </Box>
        <Container maxWidth="lg">
          <CourseOverview />
          <CourseDescription />
        </Container>
      </CourseContext.Provider>
      <Box
        width="100%"
        bgcolor="primary.main"
        height="80px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={10}
      >
        <Typography variant="body2" sx={{ color: 'grey.300' }}>
          © 2020-2022. The Happy Company
        </Typography>
      </Box>
    </>
  );
}
