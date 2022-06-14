import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import SidebarData from './sidebardata';
import './sidebar.css';
//import { Chat_bot } from './chatbot';
import { useState } from 'react';
import { click } from '@testing-library/user-event/dist/click';

export const Sidebar=()=> {

  /*const[popup, setPopup]=useState(true);

  const click=()=>{
    if(popup==true) setPopup(false);

    else setPopup(true);
  }

  const rendering=()=>{
    return(popup==true)?
    <div><Chat_bot/></div>:"";
  }*/



    return (

        <>
        <IconContext.Provider value={{color:'#fff'}}>
          <div className="nav-menu active">
            <div style={{display:"block"}} >
            {SidebarData.map((item, index) => {
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
          <div className='botsection' ></div>
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