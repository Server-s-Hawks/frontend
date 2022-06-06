import React from "react";
import "./Topbar.css";
 
 

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Employee Management System</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
           
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
         
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
           
          </div>
          <img src="https://images.unsplash.com/photo-1599257891200-693611501ecb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=378&q=80" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}