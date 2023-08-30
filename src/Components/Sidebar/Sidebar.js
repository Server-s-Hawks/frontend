import "./Sidebar.css";
 
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
           
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem ">
                <div className="sidebarIcon" />
                Profile
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
                Insert Project
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
            <Link to="/getsupervisor" className="link">
              <li className="sidebarListItem">
                <div className="sidebarIcon" />
                View Supervisors
              </li>
            </Link>
            <Link to="/sendmail" className="link">
              <li className="sidebarListItem">
                <div className="sidebarIcon" />
                Send mail
              </li>
            </Link>
            <Link to="/signin" className="link">
              <li className="sidebarListItem">
                <div className="sidebarIcon" />
                Sign IN
              </li>
            </Link>
            <Link to="/signup" className="link">
              <li className="sidebarListItem">
                <div className="sidebarIcon" />
                Sign Up
              </li>
            </Link>
            <Link to="/newprojects" className="link">
              <li className="sidebarListItem">
                <div className="sidebarIcon" />
                New projects
              </li>
            </Link>
            <Link to="/userdata" className="link">
              <li className="sidebarListItem">
                <div className="sidebarIcon" />
                User Data
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}