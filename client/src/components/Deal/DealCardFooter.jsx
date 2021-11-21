import React from 'react';
import { Rating } from '@mui/material';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/material';

const DealCardFooter = ({ rating }) => {
  const starValue = (rating * 10) / 2;
  return (
    <div>
      <Typography variant="caption">Provider rating</Typography>
      <Rating name="read-only" value={starValue} precision={0.5} readOnly />
    </div>
  );
};

export default DealCardFooter;
