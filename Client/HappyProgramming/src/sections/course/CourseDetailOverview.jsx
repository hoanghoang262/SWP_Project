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
import Iconify from '../../Component/Iconify';
import { CourseContext } from '../../context/CourseContext';
import { company } from '../../_mock/company';
const OPTIONS = company;

export default function CourseDetailOverview() {
  const { provider, title, description, price, isOnline, start, thumbnail } =
    useContext(CourseContext);
  const [value, setValue] = useState(start);
  const [author, setAuthor] = useState(provider);

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
          <TextField label="Title" defaultValue={title} />
          <TextField
            label="Provider"
            value={author}
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
              defaultValue={price}
              sx={{ flexGrow: 1 }}
              type="number"
            />
            <DesktopDatePicker
              label="Start date"
              inputFormat="MM/dd/yyyy"
              value={value}
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
              control={<Checkbox defaultChecked={isOnline} />}
            />
          </Box>
          <TextField
            label="Description"
            defaultValue={description}
            type="text"
            multiline
            minRows={8}
          />
          <div>
            <Button variant="contained">Save</Button>
          </div>
        </Stack>
      </Card>
      <div>
        <Card elevation={6} sx={{ p: 3 }}>
          <Stack spacing={1} alignItems="end">
            <Box
              component="img"
              sx={{ borderRadius: 1 }}
              src={thumbnail}
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
