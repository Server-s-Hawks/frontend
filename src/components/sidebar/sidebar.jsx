import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import SidebarData from './sidebardata';
import SidebarData1 from './sidebardata1';
import SidebarData2 from './sidebardata2';
import './sidebar.css';
//import { Chat_bot } from './chatbot';
import { useState } from 'react';
import { click } from '@testing-library/user-event/dist/click';

export const Sidebar=(props)=> {

 /*
 
 Admin - sidebardata1
 team - sidebardata2
 project - sidebardata
 HR - 
 
 
 */

  let arr ;  
   
  
  if(props.typeFromProf=="Administration")arr = SidebarData1;
  else if(props.typeFromProf=="Project Management")arr = SidebarData;
  else if(props.typeFromProf=="Team Management")arr = SidebarData2;
  else arr = null;



    return (

        <>
        <IconContext.Provider value={{color:'#fff'}}>
          <div className="nav-menu active">
          
            <div style={{display:"block"}} >
            {arr.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
          </div>
          
          </div>
          
        </IconContext.Provider>
      </>
     
    );
  }
  /* <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
             
            <ul className="sidebarList">
              <Link to="/" className="link">
                <li className="sidebarListItem ">
                  <div className="sidebarIcon" />
                  Home
                </li>
              </Link>
               
              <Link to="/project" className="link">
                <li className="sidebarListItem">
                  <div className="sidebarIcon" />
                  Projects
                </li>
              </Link>
              <Link to="/addProject" className="link">
                <li className="sidebarListItem">
                  <div className="sidebarIcon" />
                  Create Project
                </li>
              </Link>
              <Link to="/searchProject" className="link">
                <li className="sidebarListItem">
                  <div className="sidebarIcon" />
                  Search Project
                </li>
              </Link>
              <Link to="/request" className="link">
                <li className="sidebarListItem">
                  <div className="sidebarIcon" />
                  Leave Request
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      */