import { IconButtonAnimate } from '@/components/animate';
import Iconify from '@/components/Iconify';
import MenuPopover from '@/components/MenuPopover';
import React from 'react';

const TableMoreMenu = ({ children }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = !!anchorEl;
  return (
    <>
      <IconButtonAnimate onClick={handleClick}>
        <Iconify icon="akar-icons:more-vertical" />
      </IconButtonAnimate>
      <MenuPopover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: -5, horizontal: -5 }}
        sx={{ width: 160 }}
        arrow="right-top"
      >
        {children}
      </MenuPopover>
    </>
  );
};

export default TableMoreMenu;
