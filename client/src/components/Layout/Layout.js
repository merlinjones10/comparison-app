import React from 'react';
import Footer from './Footer';
import Header from './Header';
import sections from '../../sectionDummyData';
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
      <Header title="Comparison Site" sections={sections}></Header>
      <div>{children}</div>
      <Footer description="" title="Comparison page"></Footer>
    </>
  );
};

export default Layout;
