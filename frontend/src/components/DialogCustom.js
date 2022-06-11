import { Card, Dialog } from '@mui/material';
import React from 'react';

const DialogCustom = ({ open, onClose, children, ...other }) => {
  return (
    <Dialog open={open} onClose={onClose} {...other}>
      {children}
    </Dialog>
  );
};

export default DialogCustom;
