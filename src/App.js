
import {React,useState,useEffect} from 'react';
import TopBar from './components/Topbar/TopBar';
import SideBar from "./components/SideBar/SideBar";
import  Home from './pages/Home/Home';
import ProjectNew from './pages/Projects/ProjectNew';
import Team from './pages/Team/Team';
import { ToastContainer } from 'react-toastify';
import Task from './pages/Task/Task';
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AddTeam from './pages/addTeam/AddTeam';
import ViewTeam from './pages/viewTeam/ViewTeam';
import  AddTask  from './pages/AddTask/AddTask';
import ViewTask from './pages/ViewTask/ViewTask';
import ProjectTable from './pages/Projects/ProjectTable';
import NewView from './pages/ViewTask/ViewTask';





function App() {
  // const [name, setname] = useState("Rashmika Tharindu");

  // useEffect(() => {
  
  //   setTimeout( () => {
  //     setname("Urubokka");
  //   },5000);
  // }, [])
  
  return (
    <>
      <TopBar/>
      <div className='pages'>
        {/* <div className='toast'>
        <ToastContainer position='top-center'/>
        </div> */}
      
    <Routes>
      <Route path='/' element={<Home/>} />  
      <Route path='/projects' element={<ProjectTable/>} />
      <Route path='/team' element={<Team/>} />
      <Route path='/task' element={<Task/>} />
      <Route path='/create-team' element={<AddTeam/>} />
      <Route path='/view/:id' element={<ViewTeam/>} />
      <Route path='/create-task' element={<AddTask/>} />
      <Route path='/viewTask/:id' element={<ViewTask/>} />
    </Routes>
    </div>





    {/* <Sampla text={name}/> */}


    
    </>
  );
}

export default App;
