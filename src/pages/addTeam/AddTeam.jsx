import React, {useState,useEffect} from 'react';
import {useNavigate, useParams, Link} from "react-router-dom";
import "./addTeam.css";
import axios from "axios";
import { toast } from 'react-toastify';

const initialState = {
  project_company: "",
  project_name: "",
  start_date: "",
  due_date: "",
  description: "",
  supervisor_ID: 0,
  manager_ID: 0,
};
const AddTeam = () => {
  const [state, setState]=useState(initialState);

  const { project_company, project_name, start_date, due_date, description, supervisor_ID, manager_ID }= state;

  const history = useNavigate();

  const {project_ID} = useParams;

  useEffect(() => {
      axios.get(`http://localhost:5000/api/get/${project_ID}`)
      .then((resp) => setState({ ...resp.data[0] }));
  }, [project_ID]);

  const handleSubmit= (e) => {
      e.preventDefault();
      if (!project_company||!project_name||!start_date||!due_date||!description||!supervisor_ID||!manager_ID){
          toast.error("Please provide value into each input feild");

      }else {
      if (!project_ID) {
          axios
          .post(`http://localhost:5000/api/post`, {
            project_company,
            project_name,
            start_date,
            due_date,
            description,
            supervisor_ID,
            manager_ID,
          })
          .then(()=> {
              setState({ project_company: "", project_name: "", start_date: "",due_date: "", description: "", supervisor_ID: "",manager_ID: "" });

          })
          .catch((err) => toast.error(err.response.data));
          toast.success("Contact Added Successfull");

      } 
      else {

          axios
          .put(`http://localhost:5000/api/update/${project_ID}`, {
            project_company,
            project_name,
            start_date,
            due_date,
            description,
            supervisor_ID,
            manager_ID,
          })
          .then(()=> {
              setState({project_company: "", project_name: "", start_date: "",due_date: "", description: "", supervisor_ID: "",manager_ID: ""});

          })
          .catch((err) => toast.error(err.response.data));
          toast.success("Contact Updated Successfull");
      }

          
          setTimeout(() => history.push("/"), 5000);
      }
  };

  const handleInputChange =(e) => {
      const {name, value}=e.target;
      setState({...state, [name]:value});
  };



return (
  <div style={{marginTop: "100px"}}>
      <form style={{
          margin: "auto",
          padding :"15px",
          maxWidth: "400px",
          alignContent: "center"
      }}

      onSubmit={handleSubmit}
      >
      <label htmlFor="project_company">Project company</label>
      <input
          type="text"
          id="project_company"
          name="project_company"
          placeholder="project company...."
          value={project_company || ""}
          onChange={handleInputChange}
          />
      <label htmlFor="project_name">Project name</label>
      <input
          type="text"
          id="project_name"
          name="project_name"
          placeholder="project name...."
          value={project_name || ""}
          onChange={handleInputChange}
          />
      <label htmlFor="start_date">Start date</label>
      <input
          type="date"
          id="start_date"
          name="start_date"
          placeholder="start date...."
          value={start_date || ""}
          onChange={handleInputChange}
          />
      <label htmlFor="due_date">Due date</label>
      <input
          type="date"
          id="due_date"
          name="due_date"
          placeholder="due date...."
          value={due_date || ""}
          onChange={handleInputChange}
          />
      <label htmlFor="description">Description</label>
      <input
          type="text"
          id="description"
          name="description"
          placeholder="description....."
          value={description || ""}
          onChange={handleInputChange}
          />
      <label htmlFor="supervisor_ID">Supervisor ID</label>
      <input
          type="number"
          min="1"
          id="supervisor_ID"
          name="supervisor_ID"
          placeholder=" "
          value={supervisor_ID || ""}
          onChange={handleInputChange}
          />
        <label htmlFor="manager_ID">Manager ID</label>
        <input
          type="number"
          min="1"
          id="manager_ID"
          name="manager_ID"
          placeholder=" "
          value={manager_ID || ""}
          onChange={handleInputChange}
          />
          <input type="submit" value={project_ID ? "Update" : "Save"}/>
          <Link to="/">
              <input type="button" value="Go Back" />
          </Link>
      </form>
      
      
  </div>
);
};
export default AddTeam;