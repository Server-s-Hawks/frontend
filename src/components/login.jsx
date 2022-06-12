import React, { Component, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
//import { BrowserRouter as Router, Switch, Route, Redirect} from  'react-router-dom';
import { useHistory } from 'react-router-dom'; // it holds the previous page , if "push" is called it changes location then
import './login.css';



export const Login =()=> {

    //const [data, setData] = React.useState(); // this is react hook, data=state variable name, setData= setter name 



    const [username, setUsername]= useState("");
    const [password,setPassword]= useState("");

   

    const history = useHistory();



    
   
    



  /*
    const handleSubmit = (event) => {
     console.log(data);

  
      event.preventDefault();
      
  
    };


  
    const handleChange = (event) => {
             
                                                  //console.log(event.target.name, event.target.value);
      setData({
        ...data,
        [event.target.name]: event.target.value
      });
    };
*/
//--------------------------------------------------------------------------------------
 /*async function login(){ //
  console.log(username,password);

  let item={username,password};
  let result_= await fetch("http://localhost:3000/login",{ // first promise handling
    method:'GET',
    headers:{
      "Content-Type":"application/json",  //type of the content
      "Accept":"application/json"         //what kind of data is accepted
    },
    body: JSON.stringify(item)
  }); //as this api returns a promise, the function 'login()'must be async, and it is handled by 'await'
  
  result_ = await result_.json();                 //second promise handling
  //localStorage.setItem(JSON.stringify(result));
  
}*/
//---------------------------------------------------------------------------------------------

async function login(){ //
  
  
    
  

    let request = {
      username: username,
      password: password
    }

axios.post('http://localhost:3000/login', request)
.then(response=>{
  //alert(response.data.message);
  if(response.data.status==true){
    history.push('/profile');
    
  
}})
.catch(error=>{
  console.log(error);
})

 
  
}


  
    return (
      <div className='login'>
        <h2 className='sign-in'>sign in</h2>
        <form  >
            
          <div>
             <input type="text" name='username' onChange={(e)=>setUsername(e.target.value)}  className='login-1' placeholder='User name' ></input>
          </div>
          <div >
            <input type="password" name='password' onChange={(e)=>setPassword(e.target.value)} className='login-1' placeholder='Password'></input>
          </div>
          
          <div className='login-2'> 
            <button onClick={login} className='btn'>Sign in</button>
          </div>
            
        </form>
        
      </div>
    );
  }
  