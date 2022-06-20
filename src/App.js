import React, { Component, useEffect,useState } from 'react';
import { Home } from './components/home';
import {Navbar} from './components/navbar';
//import { Chat_bot } from './components/chatbot';
import { useHistory } from 'react-router-dom';
import { Profile } from './components/profile';

import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect} from  'react-router-dom';

function App() {

  //const history = useHistory();
  const[usertype,setUsertype]= useState(null);

  const[uid,setUid]=useState(null);
  const[name,setName]=useState(null);
  const[email,setEmail]=useState(null);
  const[address,setAddress]=useState(null);

//const dispatch = useDispatch();  // A hook that access react dispatch function

function function1(data,uid,name,email,address){
  setUsertype(data);
  setUid(uid);
  setName(name);
  setEmail(email);
  setAddress(address);
}

return (
  <Router>
       <div>
     
     <div className='App'>
       
        <Switch>
          <Route exact path='/'> <Home function2={function1}/></Route>
          <Route path='/profile' ><Profile typeFromAppjs={usertype} 
                                           uid={uid}
                                           name={name} 
                                           email={email}
                                           address={address} /></Route>
          
          </Switch>   
           
           
           
       
     </div>
    
  </div>
  </Router>



);
/*

let prop={
  typeFromAppjs:usertype ,
   uid:uid,
  name:name ,
  email:email,
 address:address,
}
*/



//<Route exact path='/home' ><Home/></Route>......<Route exact path='/profile/bot' ><Chat_bot/></Route>

/*
 return (
    <Router>
         <div>
       <div className='navbar'><Navbar/></div>
       <div className='App'>
         
          <Switch>
            <Route exact path='/home' ><Home/></Route>
             <Route path='/profile/bot' ><Chat_bot/></Route>
            
            </Switch>   
             
             
             
         
       </div>
    </div>
    </Router>
 


  );

*/






























  /*return (
    <Router>
         <div>
       <div className='navbar'><Navbar/></div>
       <div className='App'>
         
          <Switch>
          <Route exact path='/home' ><Home/></Route>
             <Route path='/profile/bot' ><Chat_bot/></Route>
            
            </Switch>   
             
             
             
         
       </div>
    </div>
    </Router>
 


  );*/
}

export default App;
