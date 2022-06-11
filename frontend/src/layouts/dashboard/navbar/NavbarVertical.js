import Logo from '@/components/Logo';
import { NAVBAR } from '@/config';
import {
  Avatar,
  Box,
  Card,
  Drawer,
  List,
  ListSubheader,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import React from 'react';
import navConfig from './navConfig';
import NavList from './NavList';

const NavbarVertical = () => {
  const SubHeaderStyles = styled(ListSubheader)(({ theme }) => ({
    textTransform: 'capitalize',
    color: theme.palette.common.black,
  }));
  return (
    <Drawer
      open={true}
      docker={'140'}
      variant="permanent"
      hideBackdrop={true}
      PaperProps={{
        sx: {
          width: NAVBAR.widthDrawer,
          borderRight: '1px dashed #e0e0e0',
          bgcolor: 'background.default',
        },
      }}
    >
      <Stack spacing={4} sx={{ px: 2, py: 3 }}>
        <Stack direction="row" justifyContent="space-between">
          <Logo />
          {/* <IconButton onClick={handleClick}>
              <KeyboardDoubleArrowLeftIcon />
            </IconButton> */}
        </Stack>
        <Box
          component={Card}
          sx={{
            p: 2,
            backgroundColor: (theme) => theme.palette.grey[300],
          }}
        >
          <Stack direction="row" spacing={2}>
            <Avatar src="https://i.pinimg.com/736x/46/19/b9/4619b98b13992abd0ebb521023bb85b3.jpg" />
            <Stack>
              <Typography variant="subtitle2">Phuong Hoa</Typography>
              <Typography variant="body2" color="text.secondary">
                Admin
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <List sx={{ px: 2, py: 0 }}>
        {navConfig.map((group) => (
          <Box key={group.subheader}>
            <SubHeaderStyles>{group.subheader}</SubHeaderStyles>
            {group.items.map((list) => (
              <NavList key={list.title} list={list} />
            ))}
          </Box>
        ))}
      </List>
    </Drawer>
  );
};

export default NavbarVertical;
