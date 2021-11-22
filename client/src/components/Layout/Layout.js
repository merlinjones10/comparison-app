import { grey } from '@mui/material/colors';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <main>
        <Header title="Comparison Site"></Header>
        <div style={{ backgroundColor: 'whitesmoke' }}>{children}</div>
        <Footer description="" title="Comparison page"></Footer>
      </main>
    </>
  );
};

export default Layout;
