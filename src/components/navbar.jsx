import React, { Component } from 'react';
import './navbar.css';


export const Navbar=()=>{
    return (
        <nav className='nav-bar'>
           <div className='logo'></div>
           <div><button className='btns'>Contact</button></div>
           <div><button className='btns'>News</button></div>
            
        </nav>
    );
}