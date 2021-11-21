import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material/';
import { Avatar, Button, Typography, Paper } from '@mui/material';

function BasicTable({ deal }) {
  const { provider_name, provider_logo_image_url, deal_name } = deal;
  return (
    <>
      <div id="Table Head">
        <div style={{ display: 'flex' }}>
          <Avatar src={provider_logo_image_url} />
          <div>
            <Typography variant="h4">{provider_name}</Typography>
            <Typography>{deal_name}</Typography>
          </div>
          <Button variant="contained">Visit</Button>
        </div>
        {/* TABLE HERE */}
        <TableContainer component={Paper}>
          <Table sx={{}} aria-label="simple table">
            <TableBody>
              <TableRow key="rating" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  Customer Rating
                </TableCell>
                <TableCell align="right">{(deal.provider_rating * 10) / 2} / 5</TableCell>
              </TableRow>
              <TableRow key="speed" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  Speed
                </TableCell>
                <TableCell align="right">{deal.internet_speed} Mbps</TableCell>
              </TableRow>
              <TableRow key="data_limit" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  Data Limits
                </TableCell>
                <TableCell align="right">{deal.data_limits}</TableCell>
              </TableRow>
              <TableRow key="calls_info" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  Calls
                </TableCell>
                <TableCell align="right">{deal.calls_info}</TableCell>
              </TableRow>
              <TableRow key="length" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  Contract Length
                </TableCell>
                <TableCell align="right">{deal.contract_info}</TableCell>
              </TableRow>
              <TableRow key="length" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  Montly Price
                </TableCell>
                <TableCell align="right">£{deal.monthly_price}</TableCell>
              </TableRow>
              <TableRow key="price_info" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  Price information
                </TableCell>
                <TableCell align="right">{deal.price_info}</TableCell>
              </TableRow>
              <TableRow key="setup_cost" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  Set up cost
                </TableCell>
                <TableCell align="right">
                  {deal.set_up_cost === 0 ? 'Free' : deal.set_up_cost}
                </TableCell>
              </TableRow>
              <TableRow
                key="yearly_cost"
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Yearly cost
                </TableCell>
                <TableCell align="right">£{deal.yearly_cost}</TableCell>
              </TableRow>
              <TableRow
                key="broadband_type"
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Broadband type
                </TableCell>
                <TableCell align="right">{deal.broadband_type}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default BasicTable;
