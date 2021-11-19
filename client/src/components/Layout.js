import React from 'react';
import Footer from './Footer';
// import { makeStyles } from '@mui/material';

// const useStyles = makeStyles({
//   page: {
//     background: '#f9f9f9',
//     width: '100%',
//   },
// });

const Layout = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <Footer description="" title="Comparison page"></Footer>
    </>
  );
};

export default Layout;
