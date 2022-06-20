// import React, {useState, useEffect} from 'react';
// import {Link} from "react-router-dom";
// import "./task.css"; 
// import { toast } from 'react-toastify';
// import axios from "axios";

// const Task = () => {
//     const [data, setData] =useState([]);

//     // const dataArr = Array.from(data);

//     const loadData =async () => {
//         const response =await axios.get("http://localhost:4004/task/get");
//         setData(response.data);
//     };
//     useEffect(() => {
//         loadData();
//     }, []);

//     const deleteTask = (task_ID) => {
//         if (
//             window.confirm("Are you sure that you wanted to delete that contact ?")

//         ) {
//             axios.delete(`http://localhost:4004/task/delete/${task_ID}`);
//             toast.success("Task Deleted Successfully");
//             setTimeout(() => loadData(),500);

//         }
//     };



//   return (
//     <div style={{marginTop: "150px"}}>
//         <table className="styled-table">
//             <thead>
//                 <tr>
//                     <th style={{textAlign: "center"}}>Task ID</th>
//                     <th style={{textAlign: "center"}}>Task Name</th>
//                     <th style={{textAlign: "center"}}>Description</th>
//                     <th style={{textAlign: "center"}}>Duration</th>
//                     <th style={{textAlign: "center"}}>Supervisor ID</th>
//                     <th style={{textAlign: "center"}}>Team ID</th>


//                 </tr>
//             </thead>
//             <tbody>
//                 {data.map((item, index) => {
//                     return(
//                         <tr key={item.team_ID}>
                             
//                             <td>{item.task_ID}</td>
//                             <td>{item.task_name}</td>
//                             <td>{item.description}</td>
//                             <td>{item.duration}</td>
//                             <td>{item.supervisor_ID}</td>
//                             <td>
//                                 <Link to={`/update/${item.team_ID}`}>
//                                     <button className='btn btn-edit'>Edit</button>
//                                 </Link>
//                                 <button className='btn btn-delete' onClick={() => deleteTask(item.task_ID)}>Delete</button>
//                                 <Link to={`/viewTask/${item.team_ID}`}>
//                                     <button className='btn btn-view'>View</button>
//                                 </Link>
//                             </td>
//                         </tr>
//                     )
//                 })}

//             </tbody>
//         </table>
        
         

//     </div>
//   )
// }

// export default Task;








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
  { id: 'task_ID', label: 'ID', minWidth: 80 },
  { id: 'task_name', label: 'Task Name', minWidth: 80 },
  { id: 'description', label: 'Description', minWidth: 80 },
  { id: 'duration', label: 'Duration', minWidth: 50 },
  { id: 'supervisor_ID', label: 'Supervisor ID', minWidth: 50 },
  { id: 'team_ID', label: 'Team ID', minWidth: 50 },
];

export default function Task(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate();


  const deleteTeam = (task_ID) => {
            if (
                window.confirm("Are you sure that you wanted to delete that team ?")
    
            ) {
                axios.delete(`http://localhost:4004/team/delete/${task_ID}`);
            
                setTimeout(() => loadData(),500);
    
            }
        };





  const [rows, setData] =useState([]);

    const loadData =async () => {
        const response =await axios.get("http://localhost:4004/task/get");
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
        //.delete("/user/" + data)
        .delete("http://localhost:4004/team/delete/"+data)
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
    <Paper sx={{ width: '1200px', overflow: 'hidden' ,marginLeft:"100px"}}>
     {rows&& <TableContainer sx={{ maxHeight: 440 }}>
        <Table  aria-label="sticky table">
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
                      <Button variant="contained" color="error" onClick={e => handleDelete(e, row["task_ID"])}> Delete </Button>
                      
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" color="error" onClick={e => navigate(`/viewTask/${row["task_ID"]}`)}> View </Button>
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