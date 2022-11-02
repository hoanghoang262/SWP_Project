import { Button, Box, Card, Container, Stack, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HeaderBreadcrumbs from '../Component/HeaderBreadcrumbs';
import CourseTable from '../Component/CourseTable';

export default function CourseList() {
  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate(`/admin/course/${id}`);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 5,
      }}
    >
      <Stack>
        <HeaderBreadcrumbs
          heading="Course List"
          links={[
            { name: 'Dashboard', href: '/' },
            { name: 'Course', href: '/admin/course' },
            { name: 'List' },
          ]}
          action={<Button variant="outlined">Create one</Button>}
        />

        <Card sx={{ p: 3 }} elevation={3}>
          <Stack spacing={3} direction="column">
            <Box display="flex" justifyContent="start">
              <TextField size="small" variant="outlined" placeholder="Search" />
            </Box>
            <CourseTable onRowClick={handleRowClick} />
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}
