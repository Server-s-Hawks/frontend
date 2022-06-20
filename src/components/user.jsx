import React, { Component, useState } from 'react';
import './user.css';
import axios from 'axios';

export const User =(props)=>{

    const[name_, setName]=useState(null);
    const[email_, setEmail]=useState(null);
    const[address_, setAddress]=useState(null);
    const[uid_, setUid]=useState(null);


    //setUid(props.uid);
    /*setName(props.name);
    setEmail(props.email);
    setAddress(props.address);*/



    const[enableupdate, setEnableupdate]=useState(false);

    function update(){

        setUid(props.uid);

        let request={
            name:name_,
            email:email_,
            address:address_
        }

        axios.post(`http://localhost:5000/api/profile/update/${uid_}`,request).
        then(
            response=>{
                console.log(response.message);
            }
        ).catch(error=>{
            console.log(error);
          })

    }


    return(
        <div className='user-main'>

            <div>
                <h3>Name</h3>
                <div className='block'>
                    <div className='item'>{props.name}</div>
                    <div className='item'><input type='text' placeholder='change name'  onChange={(e)=>{setEnableupdate(true);setName(e.target.value);}}></input></div>
                </div>

                
            </div>

            <div>
                <h3>Email</h3>
                <div className='block'>
                    <div className='item'>{props.email}</div>
                    <div className='item'><input type='text' placeholder='change email' onChange={(e)=>{setEnableupdate(true);setEmail(e.target.value);}}></input></div>
                </div>

                
            </div>

            <div>
                <h3>Address</h3>
                <div className='block'>
                    <div className='item'>{props.address}</div>
                    <div className='item'><input type='text' placeholder='change address' onChange={(e)=>{setEnableupdate(true);setAddress(e.target.value);}}></input></div>
                </div>

                
            </div>

            <div>
                {enableupdate?<div>
                    <button className='update' onClick={()=>{update(); setEnableupdate(false)}}>Update</button>
                    <button className='update' onClick={()=>setEnableupdate(false)}>Cancel</button>
                </div>:null}
            </div>

        </div>
    )

 


}