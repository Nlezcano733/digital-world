import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import './layout.css';

const Layout = (props) => {

  return (
    <main className="wrapper">
      <Navbar />
      {props.children}
      <Footer />
    </main>
  );
};

export default Layout;