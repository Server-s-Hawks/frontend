import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
// import '../../styles/styles.css';

import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, {useState, useEffect} from 'react';

//define columns
const columns = [
  { id: 'project_ID', label: 'ID', minWidth: 10 },
  { id: 'project_company', label: 'Project Company', minWidth: 80 },
  { id: 'project_name', label: 'Project Name', minWidth: 80 },
  { id: 'start_date', label: 'Start Date', minWidth: 50 ,format: (value) => value.slice(0, 10),},
  { id: 'due_date', label: 'Due Date', minWidth: 50 ,format: (value) => value.slice(0, 10),},
  { id: 'description', label: 'Description', minWidth: 50 },
  { id: 'supervisor_ID', label: 'Supervisor ID', minWidth: 50 },
];

export default function ProjectTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate();


  const [rows, setData] =useState([]);

    const loadData =async () => {
        const response =await axios.get("http://localhost:5000/api/get");
        setData(response.data);
    };
    console.log(rows);
    useEffect(() => {
        loadData();
    }, []);
  
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
        .delete("http://localhost:5000/api/remove/" + data)
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
  

  return (
    <Paper sx={{ marginTop:"30px",width: '1200px', overflow: 'hidden' ,marginLeft:"100px" }}>
     {rows&& <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead sx={{
                    backgroundColor: "red",
                    borderBottom: "2px solid black",
                    "& th": {
                     fontSize: "1.25rem",
                     color: "rgba(96, 96, 96)"
                 }}}>
            <TableRow sx={{
                    backgroundColor: "yellow"
                    
             }}>
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
                          {column.format && (column.id === 'start_date' || column.id === 'due_date')
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell>
                      <Button variant="contained" color="warning" onClick={e => navigateToUpdateUser(e, row)}> Update </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" color="error" onClick={e => handleDelete(e, row["project_ID"])}> Delete </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" color="error" onClick={e => navigate(`/view/${row["project_ID"]}`)}> View </Button>
                    </TableCell>

                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer> }
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows&&rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}