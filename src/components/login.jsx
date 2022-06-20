import React, { Component, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
//import { BrowserRouter as Router, Switch, Route, Redirect} from  'react-router-dom';
import { useHistory } from 'react-router-dom'; // it holds the previous page , if "push" is called it changes location then
import './login.css';



export const Login =(props)=> {

    //const [data, setData] = React.useState(); // this is react hook, data=state variable name, setData= setter name 



    const [username, setUsername]= useState("");
    const [password,setPassword]= useState("");
    //const [usertype, setUsertype]= useState("mid");

   let c = "mid"

    const history = useHistory();



    
     
   
   
    
  


  
//---------------------------------------------------------------------------------------------

async function login(){ //
  
 let usertype = null;

 let uid=null;
 let name=null;
 let email=null;
 let address=null;
 //usertype = "PManager";

 // setUsertype("Admin");

  
    
 // history.push('/profile');


    let request = {
      username: username,
      password: password
    }

axios.post('http://localhost:5000/api/login', request)
.then(response=>{
  //alert(response.data.message);
  if(response.data.status==true){
    usertype= response.data.type;
    uid= response.data.uid;
    name=response.data.name;
    email=response.data.email;
    address= response.data.address;

    props.function2(usertype, uid,name,email,address);
    history.push('/profile');

    
  
}})
.catch(error=>{
  console.log(error);
})

 
  
}


  
    return (
      <div className='login' on>
        <h2 className='sign-in'>sign in</h2>
        <div>
            
          <div>
             <input type="text" name='username' onChange={(e)=>setUsername(e.target.value)}  className='login-11' placeholder='User name' ></input>
          </div>
          <div >
            <input type="password" name='password' onChange={(e)=>setPassword(e.target.value)} className='login-12' placeholder='Password'></input>
          </div>
          
          <div className='login-2'> 
            <button onClick={login} className='btn'>Sign in</button>
            
          </div>
          </div> 
        
        
      </div>
    );
  }
  