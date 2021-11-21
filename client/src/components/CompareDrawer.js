import * as React from 'react';
// import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import NavigationIcon from '@mui/icons-material/Navigation';
import Fab from '@mui/material/Fab';
import { Button } from '@mui/material';

export default function CompareDrawer({ handleOpen }) {
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab variant="extended">
              <Button onClick={handleOpen}>Compare</Button>
              <NavigationIcon sx={{ mr: 1 }} onClick={handleOpen} />
            </Fab>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </>
  );
}
