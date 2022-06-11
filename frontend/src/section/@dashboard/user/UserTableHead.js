import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import React from 'react';

const TABLE_HEAD = [
  { id: 'name', label: 'Name' },
  { id: 'company', label: 'Company', align: 'left' },
  { id: 'phone', label: 'Phone', align: 'left' },
  { id: 'address', label: 'Address', align: 'left' },
  { id: 'role', label: 'Role', align: 'left' },
  { id: 'action', label: '', align: 'left' },
];
const UserTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        {TABLE_HEAD.map((item) => (
          <TableCell key={item.id} align={item.align}>
            {item.label}
            <TableSortLabel
            // active={orderBy === headCell.id}
            // direction={orderBy === headCell.id ? order : 'asc'}
            // onClick={createSortHandler(headCell.id)}
            />
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default UserTableHead;
