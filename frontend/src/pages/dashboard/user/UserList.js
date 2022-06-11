import { IconButtonAnimate } from '@/components/animate';
import Iconify from '@/components/Iconify';
import { TableMoreMenu } from '@/section/@dashboard/user';
import {
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react';

const TABLE_HEAD = [
  { id: 'name', label: 'Name' },
  { id: 'company', label: 'Company', align: 'left' },
  { id: 'phone', label: 'Phone', align: 'left' },
  { id: 'address', label: 'Address', align: 'left' },
  { id: 'role', label: 'Role', align: 'left' },
  { id: 'action', label: '', align: 'left' },
];
const TABLE_ROW = [
  { id: 'name', label: 'Name' },
  { id: 'company', label: 'Company' },
  { id: 'phone', label: 'Phone' },
  { id: 'address', label: 'Address' },
  { id: 'role', label: 'Role' },
  { id: 'action', label: '' },
];
const UserList = () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {TABLE_HEAD.map((item) => (
                <TableCell key={item.id} align={item.align}>
                  {item.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {TABLE_ROW.map((item, index) => (
              <TableRow key={index}>
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
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserList;
