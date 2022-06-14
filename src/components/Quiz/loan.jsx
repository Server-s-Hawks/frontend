import React, { Component } from 'react';
import { useState } from 'react';
import axios from 'axios';

import './loan.css';

function Loan() {

    const[popup1,setPopup1]= useState(true);

    const[userID,setUserID]= useState("");
    const[amount,setAmount]= useState(0.00);
    const[descript,setDescript]= useState("");



const handlePopup1=()=>{
    setPopup1(false);
}

function loanSubmit(){
    setPopup1(false);

    let loanRequest = {
                       userID: userID,
                       amount: amount,
                       description: descript
                      }
 
 axios.post('http://localhost:3000/profile/loan',loanRequest)
 .then(response=>{
     alert(response.data.message);
 });


    
}




return(popup1)?
<div >
<div className="loan-popup-main"></div>    
<div className="loan-popup">
      <div className='head'>
            <h2 className='head-section1'>Please provide following information</h2>
            <button className='head-section2' onClick={handlePopup1}>close</button>
      </div>

      <div className='contents'>
          <input type="text" name="userid" onChange={(e)=>setUserID(e.target.value)} placeholder='User ID' autoFocus required/>
      </div>

      <div className='contents'>
          <input type="number" min="1" step="any" name="amount" onChange={(e)=>setAmount(e.target.value)} placeholder='Amount' autoFocus required></input>  
          
      </div>

      <div className='contents'>
         <textarea name="description" onChange={(e)=>setDescript(e.target.value)} placeholder='description' autoFocus required maxLength="20"></textarea>
      </div>

      <div className='contents'>
          <button onClick={loanSubmit}>Submit</button>
      </div>

</div>
</div>:"";


}

export default Loan;



