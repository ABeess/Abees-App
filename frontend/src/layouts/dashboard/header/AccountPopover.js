import MenuPopover from '@/components/MenuPopover';
import useAuth from '@/hooks/useAuth';
import { AUTH_PATH } from '@/routes/path';
import {
  Avatar,
  Box,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ListItemStyles = styled(ListItemButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
}));

const AccountPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const [, dispatch] = useAuth();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    dispatch({ type: 'LOGOUT' });
    navigate(AUTH_PATH.login);
  };

  const open = !!anchorEl;
  return (
    <>
      <Avatar
        src="https://i.pinimg.com/736x/46/19/b9/4619b98b13992abd0ebb521023bb85b3.jpg"
        sx={{ cursor: 'pointer' }}
        onClick={handleClick}
      />

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        sx={{ width: 200, p: 0, mt: 1.5, ml: 0.75 }}
      >
        <Box>
          <Stack sx={{ p: 2, borderBottom: '1px dashed #e0e0e0' }}>
            <Typography variant="subtitle2">John Doe</Typography>
            <Typography variant="body2" color="text.secondary">
              John@gmail.com
            </Typography>
          </Stack>
          <Stack sx={{ p: 1, borderBottom: '1px dashed #e0e0e0' }}>
            <List disablePadding>
              {['Home', 'Profile', 'Settings'].map((text, index) => (
                <ListItemStyles key={index}>
                  <ListItemText
                    primary={
                      <Typography variant="body1" color="text.secondary">
                        {text}
                      </Typography>
                    }
                  />
                </ListItemStyles>
              ))}
            </List>
          </Stack>
          <Stack sx={{ p: 1 }}>
            <List disablePadding>
              <ListItemStyles onClick={handleLogout}>
                <ListItemText
                  primary={
                    <Typography variant="body1" color="text.secondary">
                      Logout
                    </Typography>
                  }
                />
              </ListItemStyles>
            </List>
          </Stack>
        </Box>
      </MenuPopover>
    </>
  );
};

export default AccountPopover;
