import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./project.css";
import { toast } from 'react-toastify';
import axios from "axios";

const Projects = () => {
    const [data, setData] =useState([]);

    const loadData =async () => {
        const response =await axios.get("http://localhost:3000/api/get");
        setData(response.data);
    };
    
    useEffect(() => {
        loadData();
    }, []);

    const deleteContact = (project_ID) => {
        if (
            window.confirm("Are you sure that you wanted to delete that project ?")

        ) {
            axios.delete(`http://localhost:3000/api/remove/${project_ID}`);
            toast.success("Contact Deleted Successfully");
            setTimeout(() => loadData(),500);

        }
    };



  return (
    <div style={{marginTop: "150px"}}>
         
        <table className="styled-table">
            <thead>
                <tr>
                    <th style={{textAlign: "center"}}>Project_ID.</th>
                    <th style={{textAlign: "center"}}>Company.</th>
                    <th style={{textAlign: "center"}}>Name.</th>
                    <th style={{textAlign: "center"}}>Start_Date.</th>
                    <th style={{textAlign: "center"}}>Due_Date.</th>
                    <th style={{textAlign: "center"}}>Description.</th>
                    <th style={{textAlign: "center"}}>Supevisor_ID.</th>
                    <th style={{textAlign: "center"}}>Manager_ID.</th>
                    <th style={{textAlign: "center"}}>Action.</th>

                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => {
                    return(
                        <tr key={item.project_ID}>
                             
                            <td>{item.project_ID}</td>
                            <td>{item.project_company}</td>
                            <td>{item.project_name}</td>
                            <td>{item.start_date.slice(0,10)}</td>
                            <td>{item.due_date.slice(0,10)}</td>
                            <td>{item.description}</td>
                            <td>{item.supervisor_ID}</td>
                            <td>{item.manager_ID}</td>
                            <td>
                                <Link to={`/update/${item.project_ID}`}>
                                    <button className='btn btn-edit'>Update</button>
                                </Link>
                                <button className='btn btn-delete' onClick={() => deleteContact(item.project_ID)}>Delete</button>
                                <Link to={`/view/${item.project_ID}`}>
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

export default Projects;