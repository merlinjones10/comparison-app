import React from 'react';
import { Container, Rating, Typography } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/system';

const DealCardFooter = ({ rating }) => {
  const starValue = (rating * 10) / 2;
  return (
    <Container sx={{ display: 'flex', p: 0.5, bgcolor: 'text.secondary' }}>
      <Typography variant="subtitle1" color="white">
        Provider rating: &nbsp;
      </Typography>
      <Rating name="read-only" value={starValue} precision={0.5} readOnly />
    </Container>
  );
};

export default DealCardFooter;
