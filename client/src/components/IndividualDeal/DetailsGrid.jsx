import React from 'react';
import { Grid, Typography } from '@mui/material';

const DetailsGrid = ({ deal }) => {
  const { contract_info, set_up_cost, internet_speed, monthly_price } = deal;
  return (
    <div>
      <Grid container spacing={2} sx={{}}>
        <Grid item xs={6}>
          <Typography variant="h6">£{monthly_price} p/m</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" component="h6">
            {internet_speed} Mbps
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" component="h6">
            {deal.set_up_cost === 0 ? 'Free set up' : `£${set_up_cost} set up fee.`}
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
