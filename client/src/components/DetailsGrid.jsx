import React from 'react';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';

const DetailsGrid = ({ deal }) => {
  const { contract_info, price_info, internet_speed, data_limits, monthly_price } = deal;
  console.log();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h6">£{monthly_price} p/m</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" component="h6">
            {internet_speed} speed
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" component="h6">
            Downloads: {data_limits}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" component="h6">
            {contract_info}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default DetailsGrid;
