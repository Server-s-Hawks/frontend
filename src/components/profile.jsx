import React, { Component } from 'react';
import { Chat_bot } from './chatbot';
import {Sidebar} from './sidebar/sidebar';
//import TopBar from './topbar/topbar';
import './profile.css'

export const Profile=()=>{

    return(
    
    <div className='vertical'>
       <div className='top-bar'></div>

       <div className='horizontal'><div className='h1'><Sidebar/></div>
                                 <div className='h2'><Chat_bot/></div></div>
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