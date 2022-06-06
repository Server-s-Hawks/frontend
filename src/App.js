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
              <Route path='/addProject' element={<AddProject/>} />
              <Route path='/view/:id' element={<View/>} />
               
          </Routes>
       
    </div>
    </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
