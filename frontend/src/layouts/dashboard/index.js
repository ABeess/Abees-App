import { Box, CssBaseline } from '@mui/material';
import { styled } from '@mui/system';
import { NAVBAR } from '../../config';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import NavbarVertical from './navbar/NavbarVertical';

const DashboardLayout = () => {
  const MainStyles = styled(Box)(({ theme }) => ({
    padding: theme.spacing(14.5, 2, 0),
    height: 1000,
  }));
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box sx={{ width: NAVBAR.widthDrawer }}>
        <NavbarVertical />
      </Box>
      <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
        <Header />
        <MainStyles component="main">
          <Outlet />
        </MainStyles>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
