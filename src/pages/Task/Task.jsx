import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./task.css"; 
import { toast } from 'react-toastify';
import axios from "axios";

const Task = () => {
    const [data, setData] =useState([]);

    // const dataArr = Array.from(data);

    const loadData =async () => {
        const response =await axios.get("http://localhost:4004/task/get");
        setData(response.data);
    };
    useEffect(() => {
        loadData();
    }, []);

    const deleteTask = (task_ID) => {
        if (
            window.confirm("Are you sure that you wanted to delete that contact ?")

        ) {
            axios.delete(`http://localhost:4004/task/delete/${task_ID}`);
            toast.success("Task Deleted Successfully");
            setTimeout(() => loadData(),500);

        }
    };



  return (
    <div style={{marginTop: "150px"}}>
        <table className="styled-table">
            <thead>
                <tr>
                    <th style={{textAlign: "center"}}>Task ID</th>
                    <th style={{textAlign: "center"}}>Task Name</th>
                    <th style={{textAlign: "center"}}>Description</th>
                    <th style={{textAlign: "center"}}>Duration</th>
                    <th style={{textAlign: "center"}}>Supervisor ID</th>
                    <th style={{textAlign: "center"}}>Team ID</th>


                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => {
                    return(
                        <tr key={item.team_ID}>
                             
                            <td>{item.task_ID}</td>
                            <td>{item.task_name}</td>
                            <td>{item.description}</td>
                            <td>{item.duration}</td>
                            <td>{item.supervisor_ID}</td>
                            <td>
                                <Link to={`/update/${item.team_ID}`}>
                                    <button className='btn btn-edit'>Edit</button>
                                </Link>
                                <button className='btn btn-delete' onClick={() => deleteTask(item.task_ID)}>Delete</button>
                                <Link to={`/view/${item.team_ID}`}>
                                    <button className='btn btn-view'>View</button>
                                </Link>
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
        
         

    </div>
  )
}

export default Task;