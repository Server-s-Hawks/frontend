import axios from 'axios';
import React,{useState} from 'react';
import "./addTeam.css";
import SelectMembers from './SelectMembers';
function AddTeam() {
    const [team_ID, setTeamID]=useState("");
    const [name, setName]=useState("");
    const [description, setDescription]=useState("");
    const [project_ID, setProjectID]=useState("");
    const [supervisor_ID, setSupervisorID]=useState("");
   // const [date,setDate]=useState();

    //const {team_ID, name,description, project_ID,supervisor_ID}=state;
    const handleSubmit=(e) =>{
        console.log(team_ID,name,description,project_ID,supervisor_ID);
        e.preventDefault();
            axios.post(`http://localhost:4004/team/post`, {
                team_ID,
                name,
                description,
                project_ID,
                supervisor_ID,
                //date
            }).then((res)=>{
                window.alert("Team Insert Successfully");
                console.log(res);
                
            });
                setTeamID("");
                setName("");
                setDescription("");
                setProjectID("");
                setSupervisorID("");
                
        
    }

  return (
    <>
    <div style={{marginLeft:"-40%"}}>
        <div style={{marginTop: "100px"}}>
      <form style={{
          margin: "auto",
          padding :"15px",
          maxWidth: "400px",
          alignContent: "left"
      }}
      onSubmit={handleSubmit}
      

      
      >
      <label htmlFor="project_company">Team ID</label>
      <input
          type="text"
          id="Team_ID"
          name="Team ID"
          placeholder="Team ID"
          value={team_ID}
          onChange={(e)=>setTeamID(e.target.value)
          }
         required
          />
      <label htmlFor="project_name">Project name</label>
     
      <input
          type="text"
          id="name"
          name="Name"
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
          />
     
      <label htmlFor="description">Description</label>
      <input
          type="text"
          id="description"
          name="description"
          placeholder="description....."
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          required
          />

<label htmlFor="project_ID">Project ID</label>
      <input
          type="text"
          id="project_ID"
          name="project_ID"
          placeholder="insert supp "
          value={project_ID}
          onChange={(e)=>setProjectID(e.target.value)}
          required
          />
      <label htmlFor="supervisor_ID">Supervisor ID</label>
      <input
          type="text"
        
          id="supervisor_ID"
          name="supervisor_ID"
          placeholder=" "
          value={supervisor_ID}
          onChange={(e)=>setSupervisorID(e.target.value)}
          required
          />


{/* <label htmlFor="supervisor_ID">Date</label>
      <input
          type="date"
        
          id="date"
          name="Date"
          placeholder=" "
          value={date}
          onChange={(e)=>setDate(e.target.value)}
          required
          /> */}
       
         
        
          <input type="submit" />
          {/* <Link to="/">
              <input type="button" value="Go Back" />
          </Link> */}
      </form>
      
      
  </div>
  
    </div>
    <div style={{marginLeft:"650px",marginTop:"-40%"}}>
  <SelectMembers/>
  </div>
    </>
  )
}

export default AddTeam