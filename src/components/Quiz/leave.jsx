import React, { Component } from 'react';
import { useState } from 'react';
import axios from 'axios';

import './leave.css';

function Leave(){

    const[popup2,setPopup2]= useState(true);

    const[userID,setUserID]=useState("");
    const[description, setDescription]=useState("");
    const[leavetype, setLeavetype]= useState("");
    const[fromdate, setFromdate]=useState("");
    const[todate,setTodate]=useState("");

    const handlePopup2=()=>{
        setPopup2(false);
    }

    const leaveSubmit=()=>{
        setPopup2(false);

        let request = {
            uid: userID,
            description: description,
            leavetype: leavetype,
            fromdate: fromdate,
            todate: todate
        };
        axios.post('http://localhost:3000/profile/leave', request).
        then(
            response=>{
                alert(response.data.message);
            }
        )
    }



    return(popup2)?
    <div >
    <div className="leave-popup-main"></div>    
    <div className="leave-popup">
          <div className='head'>
                <h2 className='head-section1'>Please provide following information</h2>
                <button className='head-section2' onClick={handlePopup2}>close</button>
          
          
          </div>
    
          <div className='contents'>
              <input type="text" name="userid" onChange={(e)=>setUserID(e.target.value)} placeholder='User ID' autoFocus required/>
          </div>
    
    
          <div className='contents'>
             <textarea name="description" onChange={(e)=>setDescription(e.target.value)} placeholder='description' autoFocus required maxLength="50"></textarea>
          </div>

          <div className='contents'>
            <select name="leaves" onChange={(e)=>setLeavetype(e.target.value)}>
                <option value="normal leave" >normal leave</option>
                <option value="parental leave">parental leave</option>
            </select>
          </div>

      
    
          <div className='contents'>
              <button onClick={leaveSubmit}>Submit</button>
          </div>
    
    </div>
    </div>:"";

}

export default Leave;

/* 

   <div className='contents'>
            <input type="date"  onChange={(e)=>setFromdate(e.target.value)}>Starting date</input>
          </div>

          <div className='contents'>
          <input type="date" onChange={(e)=>setTodate(e.target.value)}>Ending date</input>
          </div>

*/