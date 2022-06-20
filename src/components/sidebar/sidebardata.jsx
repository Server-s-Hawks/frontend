import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

// for project handling------------------------------------

const SidebarData = [

  {
    title: 'Profile',
    path: '/profile',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Project',
    path: '/profile/projects',   //------P
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  
  {
    title: 'Add Project',
    path: '/profile/add-project',
    icon: <IoIcons.IoIosAttach/>, //-------p
    cName: 'nav-text'
  },
  {
    title: 'Update Project',
    path: '/profile/update-project', //-----p
    icon: <IoIcons.IoIosAnalytics/>,
    cName: 'nav-text'
  },
  {
    title: 'View Project',
    path: '/profile/view-project',//-------p
    icon: <IoIcons.IoIosEye/>,
    cName: 'nav-text'
  }

];
export default SidebarData;