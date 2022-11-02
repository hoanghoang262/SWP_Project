import { Box, Card, Chip, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import { CourseContext } from '../../context/CourseContext';
import { format } from 'date-fns';
import Iconify from '../../Component/Iconify';
const description = `This is the first course in the Google Data Analytics Certificate. These courses will equip you with the skills you need to apply to introductory-level data analyst jobs. Organizations of all kinds need data analysts to help them improve their processes, identify opportunities and trends, launch new products, and make thoughtful decisions. In this course, you’ll be introduced to the world of data analytics through hands-on curriculum developed by Google. The material shared covers plenty of key data analytics topics, and it’s designed to give you an overview of what’s to come in the Google Data Analytics Certificate. Current Google data analysts will instruct and provide you with hands-on ways to accomplish common data analyst tasks with the best tools and resources.

Learners who complete this certificate program will be equipped to apply for introductory-level jobs as data analysts. No previous experience is necessary.

By the end of this course, you will:
- Gain an understanding of the practices and processes used by a junior or associate data analyst in their day-to-day job. 
- Learn about key analytical skills (data cleaning, data analysis, data visualization) and tools (spreadsheets, SQL, R programming, Tableau) that you can add to your professional toolbox. 
- Discover a wide variety of terms and concepts relevant to the role of a junior data analyst, such as the data life cycle and the data analysis process. 
- Evaluate the role of analytics in the data ecosystem. 
- Conduct an analytical thinking self-assessment. 
- Explore job opportunities available to you upon program completion, and learn about best practices in the job search.`;

const feature = [
  {
    title: 'Flexible deadlines',
    text: 'Reset deadlines in accordance to your schedule.',
    icon: 'carbon:text-link-analysis',
  },
  {
    title: 'Shareable Certificate',
    text: 'Earn a Certificate upon completion',
    icon: 'fluent:certificate-20-filled',
  },
  {
    title: 'Beginner Level',
    text: 'No prior experience with spreadsheets or data analytics required. All you need is high school level math and curiosity about how things work.',
    icon: 'fluent:data-histogram-24-regular',
  },
  {
    title: 'English',
    text: 'Subtitles: English',
    icon: 'bx:message-detail',
  },
];

function LearnedCard({ text }) {
  return (
    <Stack direction="row" spacing={1}>
      <Box>
        <Iconify icon="line-md:confirm" color="success.main" />
      </Box>
      <Typography variant="body2" sx={{ fontWeight: 300 }}>
        {text}
      </Typography>
    </Stack>
  );
}

function FeatureWrapper({ text, title, icon }) {
  return (
    <Box display="flex" justifyContent="start">
      <Box>
        <Box
          sx={{
            borderRadius: '50%',
            minWidth: '60px',
            minHeight: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'primary.light',
          }}
        >
          <Iconify icon={icon} color="primary.main" />
        </Box>
      </Box>
      <Stack spacing={1} ml={2}>
        <Typography variant="body1" fontWeight={600} sx={{ color: 'grey.800' }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 300 }}>
          {text}
        </Typography>
      </Stack>
    </Box>
  );
}

export default function CourseDescription() {
  const { start, learn, skills } = useContext(CourseContext);
  return (
    <Stack spacing={5}>
      <Stack spacing={1}>
        <Typography variant="h5">About this course</Typography>
        <Typography variant="caption">
          Last edit on {format(start, 'dd/mm/yyy')}
        </Typography>
        <Typography sx={{ fontWeight: 300 }} variant="body2">
          {description}
        </Typography>
      </Stack>
      <Stack direction="row" spacing={3}>
        <Stack spacing={3}>
          <Card sx={{ p: 2 }} variant="outlined">
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{ color: 'grey.600' }}
              textTransform="uppercase"
            >
              What you will learn
            </Typography>
            <Box
              display="grid"
              sx={{ gap: 2, p: 2, gridTemplateColumns: 'auto auto' }}
            >
              {learn.map((item, index) => (
                <LearnedCard key={index} text={item} />
              ))}
            </Box>
          </Card>
          <Card sx={{ p: 2 }} variant="outlined">
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{ color: 'grey.600' }}
              textTransform="uppercase"
            >
              Skills you will gain
            </Typography>
            <Stack direction="row" spacing={1} mt={2}>
              {skills.map((item, index) => (
                <Chip label={item} key={index} />
              ))}
            </Stack>
          </Card>
        </Stack>
        <Stack spacing={3}>
          {feature.map((item, index) => (
            <FeatureWrapper key={index} {...item} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
