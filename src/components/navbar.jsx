import React, { Component } from 'react';
import './navbar.css';

export const Navbar=()=>{
    return (
        <nav className='nav-bar'>
            <h1>App</h1>
            <ul>
                <li>Contact</li>
                <li>News</li>
            </ul>
            
        </nav>
    );
}