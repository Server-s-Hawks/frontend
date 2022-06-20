import React, { Component } from 'react';
import { Chat_bot } from './chatbot';
import {Sidebar} from './sidebar/sidebar';
//import TopBar from './topbar/topbar';
import './profile.css'
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from  'react-router-dom';

import Task from './pages/task';
import Team from './pages/team';
import AddProject from './pages/addProject';
import Projects from './pages/project';
import UpdateProject from './pages/updateproject';
import View from './pages/view';
import AddNewUser from './pages/addnewuser';
import AdminDashboard from './pages/admindashboard';
import UpdateUser from './pages/updateuser';

import { User } from './user';



export const Profile=(props)=>{

    const[popup,setPopup]=useState(false);

  

    return(
    
    <div className='vertical'>
                 <div className='top-bar'></div>

                  <div className='horizontal'><div className='h1'>
                                              <div className='sidebarcontainer'><Sidebar typeFromProf={props.typeFromAppjs}
                                                                                    /></div>
                                              <div className='botbutton' onClick={()=>setPopup(!popup)}></div>
                                                </div>
                                              <div className='h2'>
                                                <h1>{props.typeFromAppjs}</h1>
                                   <div className='h2-1'>
                                   {
                                        popup?<div><Chat_bot/></div>:null
                                    }
                                   </div>
                                   <div className='h2-2'>
                                    
                                      <Switch>
                                        <Route path='/profile/'><User
                                                                  uid={props.uid}
                                                                  name={props.name} 
                                                                  email={props.email}
                                                                  address={props.address}/></Route>
                                        <Route path='/profile/task'><Task/></Route>
                                        <Route path='/profile/team'><Team/></Route>
                                        <Route path='/profile/add-project'><AddProject/></Route>
                                        <Route path='/profile/projects'><Projects/></Route>
                                        <Route path='/profile/update-project'><UpdateProject/></Route>
                                        <Route path='/profile/view-project'><View/></Route>
                                        <Route path='/profile/addUser'><AddNewUser/></Route>
                                        <Route path='/profile/admin-dashboard'><AdminDashboard/></Route>
                                        <Route path='/profile/updateUser'><UpdateUser/></Route>
                                      </Switch>

                                   </div>
                                    
                                    </div></div>
    </div>
    );
    }

    /*    return(
       
         <div>
        <div className='side-bar'><Sidebar/></div>
        <div>
        </div>
    </div>



     <div>
            <Chat_bot/>
        </div>
        
    );*/