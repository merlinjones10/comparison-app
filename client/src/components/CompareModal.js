import React from 'react';
import { useContext, useState } from 'react';
import { apiContext } from '../context/ApiContext';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Table from './comparison/Table';
import { Container, Grid, Stack } from '@mui/material';
import CompareDrawer from './CompareDrawer';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75%',
  height: '75%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CompareModal = ({ comparisonIds }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Compare
          </Typography>

          <div style={{ display: 'flex' }}>
            <Container>
              <Stack direction="row">
                {comparisonIds
                  .filter((id) => id.compare)
                  .map((deal) => (
                    <Table deal={deal} />
                  ))}
              </Stack>
            </Container>
          </div>
        </Box>
      </Modal>
      <CompareDrawer handleOpen={handleOpen}></CompareDrawer>
    </div>
  );
};

export default CompareModal;
