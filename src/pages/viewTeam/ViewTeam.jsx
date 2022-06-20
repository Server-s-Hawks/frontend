import React, {useState, useEffect} from 'react';
 import { useParams, Link } from 'react-router-dom';
 import axios from 'axios';
 import "./ViewTeam.css";

 
 
const ViewTeam = () => {
    const [user, setUser]= useState([]);
    
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:4004/get/${id}`)
        .then((resp) => setUser({ ...resp.data[0]})).catch((err)=>console.log(err));
        
    }, [id]);
    
    return (
    <div style={{marginTop: "100px"}}>
         <div className='card'>
             <div className='card-header'>
                 <p>Team Details</p>

             </div>
             <div className='view_container'>
             
                 <strong>Team ID:</strong>
                 <span className='result'>{id}</span>
                 <br/>
                 <br/>

                 <strong>Name:</strong>
                 <span className='result'>{user.name}</span>
                 <br/>
                 <br/>

                 <strong>Description:</strong>
                 <span className='result'>{user.description}</span>
                 <br/>
                 <br/>

                 <strong>Project ID:</strong>
                 <span className='result'>{user.project_ID}</span>
                 <br/>
                 <br/>

                 <strong>Supervisor ID:</strong>
                 <span className='result'>{user.supervisor_ID}</span>
                 <br/>
                 <br/>

                 <Link to="/team">
                     <div className='btn btn-edit'>Go Back</div>
                 </Link>
                 
                 
                 


             </div>

         </div>
          
    </div>
   )
 }
 
 export default ViewTeam;