import React from 'react';
import { Container, Stack, Box, Typography, Modal, Button } from '@mui/material';
import Table from './Table';
import CompareDrawer from './CompareDrawer.jsx';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '90%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

const CompareModal = ({ comparisonIds }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={handleClose} aria-describedby="compare-box">
        <Box sx={style}>
          <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h3">Compare</Typography>
            <Button onClick={handleClose} variant="outlined" color="error">
              {' '}
              Close{' '}
            </Button>
          </Container>

          <div style={{ marginTop: 30 }}>
            <Stack direction="row">
              {comparisonIds
                .filter((id) => id.compare)
                .map((deal) => (
                  <Table deal={deal} />
                ))}
            </Stack>
          </div>
        </Box>
      </Modal>
      <CompareDrawer handleOpen={handleOpen}></CompareDrawer>
    </div>
  );
};

export default CompareModal;
