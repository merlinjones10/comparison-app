import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Fab from '@mui/material/Fab';
import { Button } from '@mui/material';

export default function CompareDrawer({ handleOpen }) {
  return (
    <>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <Box>
            <Fab variant="extended">
              <Button onClick={handleOpen}>Compare</Button>
              <CompareArrowsIcon sx={{ mr: 1 }} onClick={handleOpen} />
            </Fab>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </>
  );
}
