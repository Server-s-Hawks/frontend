import React, { Component } from 'react';
import { useState } from 'react';
import axios from 'axios';

import './leave.css';

function Leave(){

    const[popup2,setPopup2]= useState(true);

    const[userID,setUserID]=useState("");
    const[description, setDescription]=useState("");
    const[leavetype, setLeavetype]= useState("");
    const[fromdate, setFromdate]=useState(null);
    const[todate,setTodate]=useState(null);

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
        axios.post('http://localhost:5000/profile/leave', request).
        then(
            response=>{
                alert(response.data.message);
            }
        )
    }



    return(popup2)?
    <div className='main'>
    <div className="leave-popup-main"></div>    
    <div className="leave-popup">
          <div className='head'>
                <h2 className='head-section1'>Please provide leave information</h2>
                <button className='head-section2' onClick={handlePopup2}>X</button>
          
          
          </div>
    
          <div className='contents'>
              <label>User ID</label><input type="text" name="userid" onChange={(e)=>setUserID(e.target.value)} placeholder='User ID' autoFocus required className='lables'/>
          </div>
    
    
          <div className='contents'>
             <label>Description</label><textarea name="description" onChange={(e)=>setDescription(e.target.value)} placeholder='description' autoFocus required maxLength="50" className='lables'></textarea>
          </div>

          <div className='contents'>
            <label>Type</label><select name="leaves" onChange={(e)=>setLeavetype(e.target.value)} className='lables'>
                <option value="normal leave" >normal leave</option>
                <option value="parental leave">parental leave</option>
            </select>
          </div>

          <div className='contents'>
         <label>Starting date</label><input class="fromdate" type="datetime-local" onChange={(e)=>setFromdate(e.target.value)} placeholder='select starting date' ></input>
            </div>

            <div className='contents'>
         <label>Ending date</label><input class="todate" type="datetime-local" onChange={(e)=>setTodate(e.target.value)} placeholder='select ending date' ></input>
            </div>

      
    
          <div className='contents'>
              <button onClick={leaveSubmit} className='submit'>Submit</button>
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