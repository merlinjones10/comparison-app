import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header title="Comparison Site"></Header>
      <div>{children}</div>
      <Footer description="" title="Comparison page"></Footer>
    </>
  );
};

export default Layout;
