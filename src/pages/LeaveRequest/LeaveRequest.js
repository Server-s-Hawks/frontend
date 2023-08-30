import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import './LeaveRequest.css';
import { toast } from 'react-toastify';
import axios from "axios";

const LeaveRequest = () => {
    const [data, setData] =useState([]);

     

    const loadData =async () => {
        const response =await axios.get("http://localhost:5000/api/getleave");
        setData(response.data);
    };
    
    useEffect(() => {
        loadData();
    });

    const declineLeave = (leave_ID) => {
        if (
            window.confirm("Are you sure that you wanted to Decline leave ?")

        ) {
            axios.put(`http://localhost:5000/api/declineleave/${leave_ID}`);
            toast.success("Desline Leave Request Successfully");
            setTimeout(() => loadData(),500);

        }
    };

    const apprualLeave = (leave_ID) => {
        if (
            window.confirm("Are you sure that you wanted to apprual leave ?")

        ) {
            
            axios.put(`http://localhost:5000/api/updateleave/${leave_ID}`);
            toast.success("Approve Leave Request Successfully");
            setTimeout(() => loadData(),500);
               

        }
    };



  return (
    <div style={{marginTop: "150px"}}>
         
        <table className="styled-table">
            <thead>
                <tr>
                    <th style={{textAlign: "center"}}>leave_ID.</th>
                    <th style={{textAlign: "center"}}>leave_type.</th>
                    <th style={{textAlign: "center"}}>from_date.</th>
                    <th style={{textAlign: "center"}}>to_date.</th>
                    <th style={{textAlign: "center"}}>reason.</th>
                    <th style={{textAlign: "center"}}>leave_status.</th>
                    <th style={{textAlign: "center"}}>emp_ID.</th>
                    <th style={{textAlign: "center"}}>statues.</th>
                    <th style={{textAlign: "center"}}>Action.</th>

                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => {
                    return(
                        <tr key={item.leave_ID}>
                             
                            <td>{item.leave_ID}</td>
                            <td>{item.leave_type}</td>
                            <td>{item.from_date.slice(0,10)}</td>
                            <td>{item.to_date.slice(0,10)}</td>
                            <td>{item.reason}</td>
                            <td>{item.leave_status}</td>
                            <td>{item.emp_ID}</td>
                            <td>{item.statues}</td>
                            <td>
                                {/* <Link to={`/update/${item.leave_ID}`}>
                                    <button className='btn btn-edit'>Update</button>
                                </Link> */}
                                <button className='btn btn-delete' onClick={() => declineLeave(item.leave_ID)}>Decline</button>
                                <button className='btn btn-edit' onClick={() => apprualLeave(item.leave_ID)}>Apprual</button>
                                 
                                <Link to={`/sendmail`}>
                                    <button className='btn btn-view'>Send Mail</button>
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

export default LeaveRequest;