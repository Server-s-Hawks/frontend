
import React from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SidebarData from './SidebarData'
import './Sidebar.css';
import { IconContext } from 'react-icons';

function SideBar(props) {
  
  console.log(SidebarData);
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
        </div>
      </IconContext.Provider>
    </>
  );
}

export default SideBar;
