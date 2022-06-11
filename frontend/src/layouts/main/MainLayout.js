import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      MainLayout
      <Box>
        <Outlet />
      </Box>
    </div>
  );
};

export default MainLayout;
