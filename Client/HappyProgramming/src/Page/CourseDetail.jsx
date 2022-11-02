import { Container, Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import HeaderBreadcrumbs from '../Component/HeaderBreadcrumbs';
import { CourseContext } from '../context/CourseContext';
import CourseDetailOverview from '../sections/course/CourseDetailOverview';
import { _courseList } from '../_mock/_course';

export default function CourseDetail(props) {
  const { id = '' } = useParams();
  const _course = _courseList.find((item) => item.id === id);
  const { title } = _course;
  return (
    <>
      <CourseContext.Provider value={_course}>
        <Container maxWidth="lg">
          <Stack pt={5}>
            <HeaderBreadcrumbs
              heading={title}
              links={[
                { name: 'Dashboard' },
                { name: 'Course', href: '/admin/course' },
                { name: title },
              ]}
            />
            <CourseDetailOverview />
          </Stack>
        </Container>
      </CourseContext.Provider>
    </>
  );
}
