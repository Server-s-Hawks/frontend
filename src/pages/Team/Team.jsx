import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./team.css"; 
import { toast } from 'react-toastify';
import axios from "axios";

const Team = () => {
    const [data, setData] =useState([]);

    // const dataArr = Array.from(data);

    const loadData =async () => {
        const response =await axios.get("http://localhost:4004/team/get");
        setData(response.data);
        console.log(setData);
    };
    useEffect(() => {
        loadData();
    }, []);

    const deleteTeam = (team_ID) => {
        if (
            window.confirm("Are you sure that you wanted to delete that contact ?")

        ) {
            axios.delete(`http://localhost:4004/team/delete/${team_ID}`);
            toast.success("Team Deleted Successfully");
            setTimeout(() => loadData(),500);

        }
    };



  return (
    <div style={{marginTop: "150px"}}>
        <table className="styled-table">
            <thead>
                <tr>
                    <th style={{textAlign: "center"}}>Team ID</th>
                    <th style={{textAlign: "center"}}>Team Name</th>
                    <th style={{textAlign: "center"}}>Description</th>
                    <th style={{textAlign: "center"}}>Project ID</th>
                    <th style={{textAlign: "center"}}>Supervisor ID</th>
                    <th style={{textAlign: "center"}}>Action</th>


                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => {
                    return(
                        <tr key={item.team_ID}>
                             
                            <td>{item.team_ID}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.project_ID}</td>
                            <td>{item.supervisor_ID}</td>
                            <td>
                                <Link to={`/update/${item.team_ID}`}>
                                    <button className='btn btn-edit'>Edit</button>
                                </Link>
                                <button className='btn btn-delete' onClick={() => deleteTeam(item.team_ID)}>Delete</button>
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

export default Team;