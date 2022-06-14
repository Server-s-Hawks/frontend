import React, { Component, useEffect } from 'react';
import { Home } from './components/home';
import {Navbar} from './components/navbar';
//import { Chat_bot } from './components/chatbot';
import { useHistory } from 'react-router-dom';
import { Profile } from './components/profile';

import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect} from  'react-router-dom';

function App() {

  //const history = useHistory();
  

//const dispatch = useDispatch();  // A hook that access react dispatch function

/*useEffect(()=>{
  dispatch(getGets());
}, [dispatch]);

<div className='navbar'><Navbar/></div>
*/
let toHome = true;
return (
  <Router>
       <div>
     
     <div className='App'>
       
        <Switch>
          <Route exact path='/'> <Home/></Route>
          <Route path='/profile' ><Profile/></Route>
          
          </Switch>   
           
           
           
       
     </div>
  </div>
  </Router>



);



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
