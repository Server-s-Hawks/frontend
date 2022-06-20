import React, { Component, useState } from 'react';

import { Login } from './login';
import {Navbar} from './navbar.jsx';

export const Home=(props)=>{

  
    const[usertype,setUsertype]=useState("some text");


function function1(data,uid,name,email,address){
    
  setUsertype(data);
  
  props.function2(data,uid,name,email,address);
}

    return (
        <div>
            <div><Navbar/></div>
            <div><Login function2={function1}/></div>
            
        </div>
    );
}