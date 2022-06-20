import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

//------for team & tasks-------------------------

const SidebarData2 = [

  {
    title: 'Profile',
    path: '/profile',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  
  {
    title: 'Team',
    path: '/profile/team',     //----------T
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Task',
    path: '/profile/task',
    icon: <IoIcons.IoMdPeople />, //-----------T
    cName: 'nav-text'
  },
  {
    title: 'Create Team',
    path: '/profile/create-team',
    icon: <FaIcons.FaEnvelopeOpenText />, //---------T
    cName: 'nav-text'
  },
  {
    title: 'Create Task',
    path: '/profile/create-task',
    icon: <IoIcons.IoMdHelpCircle />, //-----------T
    cName: 'nav-text'
  }

];
export default SidebarData2;