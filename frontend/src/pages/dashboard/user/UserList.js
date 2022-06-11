import UserTableHead from '@/section/@dashboard/user/UserTableHead';
import UserTableRow from '@/section/@dashboard/user/UserTableRow';
import {
  Button,
  Card,
  Container,
  Paper,
  Stack,
  Tab,
  Table,
  TableBody,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import DialogCustom from '@/components/DialogCustom';

const TABLE_ROW = [
  { id: 'name', label: 'Name' },
  { id: 'company', label: 'Company' },
  { id: 'phone', label: 'Phone' },
  { id: 'address', label: 'Address' },
  { id: 'role', label: 'Role' },
  { id: 'action', label: '' },
];

const UserList = () => {
  const [page, setPage] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  return (
    <Container maxWidth="lg">
      <Stack direction="row" justifyContent="space-between" sx={{ mb: 6 }}>
        <Typography variant="h5" color="initial">
          User list
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpenModal}>
          create user
        </Button>
      </Stack>
      <DialogCustom open={isOpenModal} onClose={handleCloseModal} maxWidth="lg">
        <Typography variant="body1" color="initial">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quod
          fugit aut dolorem impedit optio deserunt harum! Voluptate, fugit
          atque, dolorum eos, ipsam eligendi accusamus temporibus quia corporis
          adipisci harum?
        </Typography>
      </DialogCustom>

      <Card>
        <ToolBarSection />
        <TableContainer component={Paper}>
          <Table>
            <UserTableHead />
            <TableBody>
              {TABLE_ROW.map((item, index) => (
                <UserTableRow key={index} rows={item} />
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  count={TABLE_ROW.length}
                  page={page}
                  rowsPerPage={5}
                  onPageChange={handleChangePage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Card>
    </Container>
  );
};

const ToolBarSection = () => {
  return (
    <Stack spacing={1} sx={{ mb: 2 }}>
      <Toolbar
        sx={{
          bgcolor: (theme) => theme.palette.grey[200],
          mb: 2,
        }}
      >
        <Tab label="All"></Tab>
      </Toolbar>
      <Box sx={{ px: 3 }}>
        <TextField label="Search" fullWidth />
      </Box>
    </Stack>
  );
};

export default UserList;
