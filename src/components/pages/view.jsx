import React, {useState, useEffect} from 'react';
 import { useParams, Link } from 'react-router-dom';
 import axios from 'axios';
 import "./view.css";

 
 
const View = () => {
    const [user, setUser]= useState([]);
    
    const {project_ID} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/api/get/${project_ID}`)
        .then((resp) => setUser({ ...resp.data[0]}));
        
    }, [project_ID]);
    
    return (
    <div style={{marginTop: "100px"}}>
         <div className='card'>
             <div className='card-header'>
                 <p>Project Details</p>

             </div>
             <div className='view_container'>
             
                 <strong>Project ID:</strong>
                 <span>{project_ID}</span>
                 <br/>
                 <br/>

                 <strong>Project Company:</strong>
                 <span>{user.project_company}</span>
                 <br/>
                 <br/>

                 <strong>Projct Name:</strong>
                 <span>{user.project_name}</span>
                 <br/>
                 <br/>

                 <strong>Start Date:</strong>
                 <span>{user.start_date}</span>
                 <br/>
                 <br/>

                 <strong>Due Date:</strong>
                 <span>{user.due_date}</span>
                 <br/>
                 <br/>
                 <strong>Description:</strong>
                 <span>{user.description}</span>
                 <br/>
                 <br/>

                 <strong>Supevisor ID:</strong>
                 <span>{user.supervisor_ID}</span>
                 <br/>
                 <br/>

                 <strong>manager ID:</strong>
                 <span>{user.manager_ID}</span>
                 <br/>
                 <br/>

                 <Link to="/">
                     <div className='btn btn-edit'>Go Back</div>
                 </Link>
                 
                 
                 


             </div>

         </div>
          
    </div>
   )
 }
 
 export default View;