import Iconify from '@/components/Iconify';
import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react';
import TableMoreMenu from './TableMoreMenu';

const UserTableRow = ({ rows }) => {
  return (
    <>
      <TableRow hover>
        <TableCell component="th" scope="row">
          Dao Le Phuong Hoa
        </TableCell>
        <TableCell align="left">Email</TableCell>
        <TableCell align="left">Email</TableCell>
        <TableCell align="left">Email</TableCell>
        <TableCell align="left">Email</TableCell>
        <TableCell align="center">
          <TableMoreMenu>
            <MenuItem
              sx={{
                borderRadius: 1,
              }}
            >
              <ListItemIcon>
                <Iconify
                  icon="ic:baseline-delete"
                  width={20}
                  height={20}
                  color={(theme) => theme.palette.error.main}
                />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="subtitle2" color="error">
                    Delete
                  </Typography>
                }
              />
            </MenuItem>
            <MenuItem
              sx={{
                borderRadius: 1,
              }}
            >
              <ListItemIcon>
                <Iconify
                  icon="clarity:edit-solid"
                  width={20}
                  height={20}
                  color={(theme) => theme.palette.warning.main}
                />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: (theme) => theme.palette.warning.main,
                    }}
                  >
                    Edit
                  </Typography>
                }
              />
            </MenuItem>
          </TableMoreMenu>
        </TableCell>
      </TableRow>
    </>
  );
};

export default UserTableRow;
