import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const location = useLocation();
  const noNavbarRoutes = ['/login', '/register']; // Add routes where you don't want the Navbar

  return (
    <>
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      {children}
    </>
  );
};

export default Layout;
