import './App.css';
import {BrowserRouter} from "react-router-dom"; 
import { Routes,Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Topbar from './Components/Topbar/Topbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import Projects from "./pages/Projects/Projects";
import AddProject from './pages/AddProject/AddProject';
import View from './pages/View/View';
import UpdateProject from './pages/UpdateProject/UpdateProject';
import SearchProject from './pages/SearchProject/SearchProject';
import LeaveRequest from './pages/LeaveRequest/LeaveRequest';
import ViewSupervisor from './pages/ViewSupervisor/ViewSupervisor';
import Mailer from './Components/Mailer/Mailer';
import SignIn from './pages/SignIN/SignIN';
import SignUp from './pages/SignUP/SignUP';
import ProjectTable from './pages/NewProjects/NewProjects';
import UserTable from './pages/UserData/UserData';
//import ViewManager from './pages/ViewManagers/ViewManagers';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
         <Topbar/>
         <div className="container">
         <Sidebar/>
         <div className="others">
            <ToastContainer position="top-center"/>
          <Routes>
              
              <Route exact path ='/' element={<Home/>} />
              <Route path ='/project' element={<Projects/>} />
              <Route path ='/addProject' element={<AddProject/>} />
              <Route path ='/view/:project_ID' element={<View/>} />
              <Route path ='/update/:project_ID' element={<UpdateProject/>} />
              <Route path ='/searchProject' element={<SearchProject/>} />
              <Route path ='/request' element={<LeaveRequest/>} />
              <Route path ='/getsupervisor' element={<ViewSupervisor/>} />
              <Route path ='/sendmail' element={<Mailer/>} />
              <Route path ='/signin' element={<SignIn/>} />
              <Route path ='/signup' element={<SignUp/>} />
              <Route path ='/newprojects' element={<ProjectTable/>} />
              <Route path ='/userdata' element={<UserTable/>} />

               
          </Routes>
       
    </div>
    </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
