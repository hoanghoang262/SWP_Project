import {
  Typography,
  Button,
  Box,
  Container,
  Stack,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAllCourseInfo } from '../Api/courseManager';
import HeaderBreadcrumbs from '../Component/HeaderBreadcrumbs';
import Iconify from '../Component/Iconify';
import LayoutSwitch from '../Component/LayoutSwitch';
import CourseHome from '../sections/course/CourseHome';
import CourseListGridCard from '../sections/course/CourseListGridCard';
import CourseListListCard from '../sections/course/CourseListListCard';
import { _courseList } from '../_mock/_course';

export default function CourseExplore() {
  //load course data
  const [courses, setCourses] = useState([])
  useEffect(() => {
    getAllCourseInfo((outputrows) => {
      setCourses(outputrows)
      console.log(outputrows)
    })
  }, [])

  const [layout, setLayout] = useState('list');

  const handleChangeLayout = (value) => {
    if (value !== layout) {
      setLayout(value);
    }
  };
  const { pathname } = useLocation();
  const isAdmin = pathname.includes('admin');
  let rest = {};
  if (isAdmin) {
    rest = {
      links: [
        { name: 'Dashboard', href: '/' },
        { name: 'Course', href: '/admin/course' },
        { name: 'List' },
      ],
      action: <LayoutSwitch active={layout} onChange={handleChangeLayout} />,
    };
  } else {
    rest = {
      links: [{ name: 'Course', href: '/course' }, { name: 'List' }],
      action: <LayoutSwitch active={layout} onChange={handleChangeLayout} />,
    };
  }

  return (
    <>
      <CourseHome />
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Stack pt={5}>
          {/* <HeaderBreadcrumbs heading="Course List" {...rest} /> */}
          <Typography variant="h3" fontWeight={500} sx={{ mb: 4 }}>
            Course List
          </Typography>
          <Box mb={3} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <LayoutSwitch active={layout} onChange={handleChangeLayout} />
            <Stack direction="row" spacing={1}>
              <Button
                variant="text"
                endIcon={
                  <Iconify sx={{ color: 'grey.800' }} icon="bx:filter" />
                }
              >
                <Typography
                  sx={{ color: 'grey.800' }}
                  fontWeight={500}
                  textTransform={'capitalize'}
                  variant="body2"
                >
                  Filter
                </Typography>
              </Button>
              <Button
                variant="text"
                endIcon={
                  <Iconify
                    sx={{ color: 'grey.800' }}
                    icon="akar-icons:triangle-down"
                  />
                }
              >
                <Typography
                  component="span"
                  fontWeight={500}
                  textTransform={'capitalize'}
                  variant="body2"
                  sx={{ color: 'grey.800' }}
                >
                  Sort by:
                </Typography>
                <Typography
                  textTransform={'capitalize'}
                  variant="body2"
                  component="span"
                  ml={1}
                >
                  Name
                </Typography>
              </Button>
            </Stack>
          </Box>
          {layout === 'grid' && (
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'auto',
                  sm: 'auto auto',
                  md: 'auto auto auto auto',
                },
                gap: 2,
              }}
            >
              {/* hien thi list course card */}
              {courses.map((course, index) => (
                <CourseListGridCard key={index} course={course} />
              ))}
            </Box>
          )}
          {layout === 'list' && (
            <Stack spacing={2}>
              {courses.map((course, index) => (
                <CourseListListCard key={index} course={course} />
              ))}
            </Stack>
          )}
        </Stack>
      </Container>
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
