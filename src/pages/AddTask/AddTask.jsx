import axios from 'axios';
import React,{useState} from 'react';
import "./AddTask.css";
function AddTask() {
    const [task_ID, setTaskID]=useState("");
    const [name, setName]=useState("");
    const [description, setDescription]=useState("");
    const [duration, setDuration]=useState("");
    const [supervisor_ID, setSupervisorID]=useState("");
    const [team_ID, setTeamID]=useState("");

    
    const handleSubmit=(e) =>{
        
        e.preventDefault();
            axios.post(`http://localhost:4004/task/post`, {
                task_ID,
                name,
                description,
                duration,
                supervisor_ID,
                team_ID

            }).then((res)=>{
                // console.log("dat add");
                    window.alert("Team Insert Successfully");
                    console.log(res);

                
                setTaskID("");
                setName("");
                setDescription("");
                setDuration("");
                setSupervisorID("");
                setTeamID("");
            });
        
    }

  return (
    <div style={{marginLeft:"-40%"}}>
        <div style={{marginTop: "100px"}}>
      <form style={{
          margin: "auto",
          padding :"15px",
          maxWidth: "400px",
          alignContent: "center"
      }}
      onSubmit={handleSubmit}
      

      
      >
      <label htmlFor="task_id">Task ID</label>
      <input
          type="text"
          id="Task_ID"
          name="Task ID"
          placeholder="Insert Task ID"
          value={task_ID}
          onChange={(e)=>setTaskID(e.target.value)
          }
         required
          />

      <label htmlFor="task_name">Task name</label>

      <input
          type="text"
          id="task_name"
          name="name"
          placeholder="ADD description....."
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
          />

      <label htmlFor="description">Description</label>
      <input
          type="text"
          id="description"
          name="description"
          placeholder="ADD description....."
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          required
          />
     
      <label htmlFor="duration">Duration</label>
      <input
          type="text"
          id="duration"
          name="duration"
          placeholder="Insert duration"
          value={duration}
          onChange={(e)=>setDuration(e.target.value)}
          required
          />
     
      


      <label htmlFor="supervisor_ID">Supervisor ID</label>
      <input
          type="text"
        
          id="supervisor_ID"
          name="supervisor_ID"
          placeholder="Insert Supervisor ID "
          value={supervisor_ID}
          onChange={(e)=>setSupervisorID(e.target.value)}
          required
          />
       
       <label htmlFor="team_ID">Team ID</label>
      <input
          type="text"
          id="team_ID"
          name="team_ID"
          placeholder="Insert Team Id"
          value={team_ID}
          onChange={(e)=>setTeamID(e.target.value)}
          required
          />
         
        
          <input type="submit" />
      </form>
      
      
  </div>

    </div>
  )
}

export default AddTask