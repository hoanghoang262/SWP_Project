import { Box, Container, Typography, Stack } from '@mui/material';

export default function About() {
  return (
    <>
      <Box height="200px" bgcolor="primary.main" p={3}>
        <Typography
          variant="h2"
          sx={{ color: 'white', fontSize: 20, fontWeight: 600 }}
        >
          Happy Program
        </Typography>
        <Box p={3} display="flex" justifyContent="center">
          <Box textAlign="center">
            <Typography variant="h5" sx={{ color: 'primary.light' }}>
              The Happy Story
            </Typography>
            <Typography sx={{ color: 'white' }}>
              We know SEO. In fact, we wrote the blog on it.
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
          sx={{ width: '600px', textAlign: 'center' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
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
