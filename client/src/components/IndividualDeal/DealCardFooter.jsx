import React from 'react';
import { Container, Rating, Typography } from '@mui/material';

const DealCardFooter = ({ rating }) => {
  const starValue = (rating * 10) / 2;
  return (
    <Container sx={{ display: 'flex' }}>
      <Typography variant="subtitle1">Provider rating:</Typography>
      <Rating name="read-only" value={starValue} precision={0.5} readOnly />
    </Container>
  );
};

export default DealCardFooter;
