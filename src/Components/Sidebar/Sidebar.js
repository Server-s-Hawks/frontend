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
  );
}