import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

//-----for admin---------------------------------------------

const SidebarData1= [

  {
    title: 'Profile',
    path: '/profile',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Add New User',
    path: '/profile/addUser', //-------A
    icon: <FaIcons.FaUser/>,
    cName: 'nav-text'
  },
  {
    title: 'Admin Dashboard',
    path: '/profile/admin-dashboard', //-----A
    icon: <FaIcons.FaSquare/>,
    cName: 'nav-text'
  },
  {
    title: 'Update User',
    path: '/profile/updateUser', //-----A
    icon: <FaIcons.FaSquare/>,
    cName: 'nav-text'
  }

];
export default SidebarData1;