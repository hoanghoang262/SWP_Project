import { Box, Container, Typography, Stack } from '@mui/material';

export default function About() {
  return (
    <>
      <Box height="200px" bgcolor="primary.main" p={3}>
        <Typography
          variant="h2"
          sx={{ color: 'white', fontSize: 20, fontWeight: 600 }}
        >
          
        </Typography>
        <Box p={3} display="flex" justifyContent="center">
          <Box textAlign="center">
            <Typography variant="h5" sx={{ color: 'primary.light' }}>
              The Happy Program
            </Typography>
            <Typography sx={{ color: 'white' }}>
              Build upon the demand of closing the gap of knowledge.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        height="200px"
        bgcolor="grey.100"
        p={3}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Typography
          variant="body1"
          sx={{ width: '500px', textAlign: 'center' }}
        >
          We are a team of students come from FPT university.
          This website is a project of our team with the target that
          to create a site has fully functions of a foundation to be a
          alternative way of communication between students, teachers and knowledge
        </Typography>
      </Box>
      <Container>
        <Box
          p={3}
          justifyContent="center"
          alignItems="center"
          sx={{
            flexDirection: { md: 'row', xs: 'column' },
            gap: 3,
            display: 'flex',
          }}
        >
          <Box
            component="img"
            src="src/assets/about.jpg"
            alt="Work station"
            width="350px"
            height="300px"
          />
          <Stack spacing={2}>
            <Typography variant="h5" fontWeight={500}>
              Our work station
            </Typography>
            <Typography>
              Do not have financial support from outsider, 
              we mostly build this project by empty hands and ourself effort. 
              Most of the time, we builded this project together at class or the library at school,
              we also have meeting at home to work together
            </Typography>
          </Stack>
        </Box>
        <Box
          p={3}
          justifyContent="center"
          alignItems="center"
          sx={{
            flexDirection: { md: 'row', xs: 'column' },
            gap: 3,
            display: 'flex',
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h5" fontWeight={500}>
              Our Founding
            </Typography>
            <Typography>
              Our team leader is Hoang, who work the most hard to get our team together
              and finished this project in time, with the time he spend on us and this project
              he's truly the mvp and a decent leader. Althrough sometimes we did have some argruments
              but it all work out perfectly
            </Typography>
          </Stack>
          <Box
            component="img"
            src="src/assets/founder.jpg"
            alt="Work station"
            width="350px"
            height="300px"
          />
        </Box>
      </Container>
      <Box
        width="100%"
        bgcolor="primary.main"
        height="80px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="body2" sx={{ color: 'grey.300' }}>
          © 2020-2022. The Happy Company
        </Typography>
      </Box>
    </>
  );
}
