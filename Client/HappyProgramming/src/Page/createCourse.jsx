import {
    FormControlLabel,
    Checkbox,
    Button,
    Box,
    Card,
    Stack,
    MenuItem,
    TextField,
  } from '@mui/material';
  import { DesktopDatePicker } from '@mui/x-date-pickers';
  import { useContext, useState } from 'react';
  import Iconify from '../Component/Iconify';
  import { CourseContext } from '../context/CourseContext';
  import { company } from '../_mock/company';
  import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import HeaderBreadcrumbs from '../Component/HeaderBreadcrumbs';
import { _courseList } from '../_mock/_course';
  const OPTIONS = company;
  
   function CreatedCourseDetail() {
    
    const [value, setValue] = useState('');
    const [author, setAuthor] = useState('');
  
    const handleChange = (newValue) => {
      setValue(newValue);
    };
  
    const handleChangeAuthor = (event) => {
      setAuthor(event.target.value);
    };
  
    return (
      <Stack direction="row" spacing={3}>
        <Card sx={{ p: 3, flexGrow: 1 }} elevation={6}>
          <Stack spacing={2}>
            <TextField label="Title" />
            <TextField
              label="Provider"
              
              onChange={handleChangeAuthor}
              select
            >
              {OPTIONS.map((option, index) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <Stack direction="row" spacing={2}>
              <TextField
                label="Price"
                
                sx={{ flexGrow: 1 }}
                type="number"
              />
              <DesktopDatePicker
                label="Start date"
                inputFormat="MM/dd/yyyy"
                
                onChange={handleChange}
                renderInput={(params) => (
                  <TextField sx={{ flexGrow: 1 }} {...params} />
                )}
              />
            </Stack>
            <Box>
              <FormControlLabel
                label="Online"
                sx={{ ml: 2 }}
                labelPlacement="end"
                control={<Checkbox defaultChecked={true} />}
              />
            </Box>
            <TextField
              label="Description"
              
              type="text"
              multiline
              minRows={8}
            />
            <div>
              <Button variant="contained">Created</Button>
            </div>
          </Stack>
        </Card>
        <div>
          <Card elevation={6} sx={{ p: 3 }}>
            <Stack spacing={1} alignItems="end">
              <Box
                component="img"
                sx={{ borderRadius: 1, width: 300, height: 300 }}
                src="https://previews.123rf.com/images/mathier/mathier1905/mathier190500002/134557216-no-thumbnail-image-placeholder-for-forums-blogs-and-websites.jpg"
                alt="thumbnail"
              />
              <Button variant="text" endIcon={<Iconify icon="bytesize:edit" />}>
                {' '}
                Edit
              </Button>
            </Stack>
          </Card>
        </div>
      </Stack>
    );
  }

  export default function CreatedCourse() {
    
    return (
      <>
        
          <Container maxWidth="lg">
            <Stack pt={5}>
              <HeaderBreadcrumbs
                heading={"New Course"}
                links={[
                  { name: 'Dashboard' },
                  { name: 'Course', href: '/admin/course' },
                  { name: 'New Course' },
                ]}
              />
              <CreatedCourseDetail />
            </Stack>
          </Container>
        
      </>
    );
  }