import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import '../../styles/styles.css';

import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//define columns
const columns = [
  { id: 'name', label: 'Name', minWidth: 80 },
  { id: 'address_city', label: 'Address', minWidth: 80 },
  { id: 'email', label: 'Email Address', minWidth: 80 },
  { id: 'nic', label: 'NIC number', minWidth: 50 },
  {
    id: 'dob', label: 'Date of Birth', minWidth: 50,
    format: (value) => value.slice(0, 10),
  },
];

export default function StickyHeadTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate();

  //handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  //handle row number change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //go to update form
  const navigateToUpdateUser = (e, data) => {
    navigate("/admin/update", {
      state: {
        data: data,
      },
    });
  }

  //handle delete
  const handleDelete = (e, data) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure you want to delete user?") == true) {
      console.log("data", data);
      axios
        .delete("/user/" + data)
        .then((response) => {
          window.location.reload();
        })
        .catch((error) => {
          console.log(error.message);
          alert(error.message);
        });
    }
  }

  //get data of user
  const rows = props.data

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
                          {column.format && column.id === 'dob'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell>
                      <Button variant="contained" color="warning" onClick={e => navigateToUpdateUser(e, row)}> Update </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" color="error" onClick={e => handleDelete(e, row["user_ID"])}> Delete </Button>
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