import React from 'react';
import { Toolbar, Button } from '@mui/material/';
import Typography from '@mui/material/Typography';

function Header(props) {
  const { title } = props;

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small">Home</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <Button variant="outlined" size="small">
          Sign In
        </Button>
      </Toolbar>
    </>
  );
}
export default Header;
