import React, {useState, useEffect} from 'react';
 import { useParams, Link } from 'react-router-dom';
 import axios from 'axios';
 import "./viewTask.css";

 
 
const ViewTask = () => {
    const [user, setUser]= useState([]);
    
    const {id} = useParams();
console.log(user);
    useEffect(() => {
        axios.get(`http://localhost:4004/gettask/${id}`)
        .then((resp) => setUser({ ...resp.data[0]})).catch((err)=>console.log(err));
        
    }, [id]);
    
    return (
    <div style={{marginTop: "100px"}}>
         <div className='card'>
             <div className='card-header'>
                 <p>Task Details</p>

             </div>
             <div className='view_container'>
             
                 <strong>Task ID:</strong>
                 <span className='result'>{id}</span>
                 <br/>
                 <br/>

                 <strong> Task Name:</strong>
                 <span className='result'>{user.task_name}</span>
                 <br/>
                 <br/>

                 <strong>Description:</strong>
                 <span className='result'>{user.description}</span>
                 <br/>
                 <br/>

                 <strong>Duration:</strong>
                 <span className='result'>{user.duration}</span>
                 <br/>
                 <br/>

                 <strong>Supervisor ID:</strong>
                 <span className='result'>{user.supervisor_ID}</span>
                 <br/>
                 <br/>

                 <strong>Team ID:</strong>
                 <span className='result'>{user.team_ID}</span>
                 <br/>
                 <br/>

                 <Link to="/task">
                     <div className='btn btn-edit'>Go Back</div>
                 </Link>
                 
                 
                 


             </div>

         </div>
          
    </div>
   )
 }
 
 export default ViewTask;