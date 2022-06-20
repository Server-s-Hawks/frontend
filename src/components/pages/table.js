import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
//import '../../styles/styles.css';

import Button from '@mui/material/Button';

const columns = [
  { id: 'name', label: 'Name', minWidth: 80 },
  { id: 'address', label: 'Address', minWidth: 80 },
  { id: 'mobile', label: 'Mobile Number', minWidth: 50 },
  { id: 'email', label: 'Email Address', minWidth: 80 },
  { id: 'nic', label: 'NIC number', minWidth: 50 },
  { id: 'dob', label: 'Date of Birth', minWidth: 50 },
];

function createData(name, address, mobile, email, nic, dob) {
  return { name, address, mobile, email, nic, dob};
}

const rows = [
  createData('Saman Perera', 'Colombo', '0774455898', 'saman@abc.com', '914578632V', '1991-02-17'),
  createData('Nimal Perera', 'Kandy', '077784598', 'nimal@abc.com', '945896352V', '1994-10-27'),
];

const navigateToUpdateUser = (e) => {
  window.location = '/admin/update'
}

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };



  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell>
                        <Button variant="contained" color="warning" onClick={e => navigateToUpdateUser(e)}> Update </Button>
                    </TableCell>
                    <TableCell>
                        <Button variant="contained" color="error"> Delete </Button>
                    </TableCell>
                    
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}