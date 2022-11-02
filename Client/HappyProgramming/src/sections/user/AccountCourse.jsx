import { Stack } from '@mui/material';
import { _courseList } from '../../_mock/_course';
import AccountCourseCard from './AccountCourseCard';

export default function AccountCourse() {
  const courses = _courseList.slice(1, 9);
  return (
    <Stack spacing={3}>
      {courses.map((course, index) => (
        <AccountCourseCard key={`${index}`} course={course} />
      ))}
    </Stack>
  );
}
