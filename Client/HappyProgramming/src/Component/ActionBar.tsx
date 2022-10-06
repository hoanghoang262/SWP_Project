import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ActionBar(props:any) {
  const { children } = props;

  return (
    <Box justifyContent="space-between" display="flex">
      <Typography variant="h2" sx={{ color: 'grey.900', fontSize: 20, fontWeight: 600 }}>
        <Link to={"/"}>Happy Program</Link>
      </Typography>
      {children}
    </Box>
  );
}
