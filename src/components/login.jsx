import React, { Component } from 'react';

export const Login =()=> {

    const [data, setData] = React.useState(); // this is react hook, data=state variable name, setData= setter name 
  
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
  
    return (
      <div >
        <form onSubmit={handleSubmit}>
            
            <div>
          <input type="text" name='username' onChange={handleChange}></input>
          </div>
          <div>
          <input type="password" name='password' onChange={handleChange}></input>
          </div>
          <div>
          <input type="submit" value="submit" className='btn btn-primary'></input>
          </div>
            
        </form>
      </div>
    );
  }
  