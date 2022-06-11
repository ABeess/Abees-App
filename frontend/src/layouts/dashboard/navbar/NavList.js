import Iconify from '@/components/Iconify';
import {
  List,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Collapse,
  Link,
  Stack,
  Typography,
  ListItem,
} from '@mui/material';
import React, { useState } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { matchPath, NavLink, useLocation } from 'react-router-dom';

const NavList = ({ list }) => {
  const [open, setOpen] = useState(false);

  const { title, children, icon } = list;

  const { pathname } = useLocation();

  const getActive = (path) => {
    return path ? !!matchPath({ path, end: false }, pathname) : false;
  };

  const active = getActive(list.path);

  const colorActive = {
    color: (theme) => (active ? theme.palette.primary.main : 'text.secondary'),
  };
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => setOpen(!open)}
          sx={{ p: 2, borderRadius: (theme) => theme.shape }}
        >
          <ListItemIcon>
            <Iconify icon={icon} sx={colorActive} />
          </ListItemIcon>
          <ListItemText
            secondary={
              <Typography
                variant="button"
                color={active ? 'primary' : 'text.secondary'}
                sx={{ textTransform: 'capitalize' }}
              >
                {title}
              </Typography>
            }
          />
          {open ? (
            <ExpandMoreIcon sx={colorActive} />
          ) : (
            <ChevronRightIcon sx={colorActive} />
          )}
        </ListItemButton>
      </ListItem>
      <Collapse in={open}>
        <List disablePadding>
          {children.map((child) => (
            <NavItemSub
              key={child.path}
              items={child}
              open={open}
              active={getActive(child.path)}
            />
          ))}
        </List>
      </Collapse>
    </>
  );
};

const NavItemSub = ({ items, open, active }) => {
  const { title, path } = items;

  return (
    <Link
      component={NavLink}
      to={path}
      underline="none"
      variants="body2"
      color={active ? 'primary' : 'text.secondary'}
    >
      <ListItemButton sx={{ borderRadius: (theme) => theme.shape }}>
        <ListItemIcon>
          <Stack
            alignItems="center"
            sx={{ fontSize: active ? 10 : 6, minWidth: 20 }}
          >
            <CircleIcon fontSize="inherit" />
          </Stack>
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="body2" textTransform="capitalize">
              {title}
            </Typography>
          }
        />
      </ListItemButton>
    </Link>
  );
};

export default NavList;
