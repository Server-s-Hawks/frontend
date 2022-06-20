import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./projectNew.css";
import { toast } from 'react-toastify';
import axios from "axios";

const ProjectNew = () => {
    const [data, setData] =useState([]);

    const loadData =async () => {
        const response =await axios.get("http://localhost:4004/get");
        setData(response.data);
    };
    useEffect(() => {
        loadData();
    }, []);



  return (
    <div style={{marginTop: "150px"}}>
       
       
        <table className="styled-table">
            <thead>
                <tr>
                    <th style={{textAlign: "center"}}>Project ID.</th>
                    <th style={{textAlign: "center"}}>Company.</th>
                    <th style={{textAlign: "center"}}>Name</th>
                    <th style={{textAlign: "center"}}>Start_Date.</th>
                    <th style={{textAlign: "center"}}>Due_Date.</th>
                    <th style={{textAlign: "center"}}>Description.</th>
                    <th style={{textAlign: "center"}}>Supevisor_ID.</th>
                    <th style={{textAlign: "center"}}>Manager_ID.</th>
                    

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
                        </tr>
                    )
                })}

            </tbody>
        </table>
        
         

    </div>
  )
}

export default ProjectNew;