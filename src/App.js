import TopBar from "./components/Topbar/Topbar";
import "./App.css";
import Add from './pages/Add/Add';
import {
 BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import  TableData from './pages/View/View'




function App() {
 
  
  return (
    <>
    
    <Router>
    <TopBar/>
      <div className='pages'>
    
   
    <Routes>
    
     
      <Route path='/Add' element={<Add/>} />  
      <Route path='/view' element={< TableData/>} /> 
      
    </Routes>
    
    
    </div>
    </Router>
    
    </>
  );
}

export default App;

