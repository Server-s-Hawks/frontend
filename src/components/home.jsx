import React, { Component } from 'react';
import { Navbar } from './navbar';
import { Login } from './login';

export const Home=()=>{
    return (
        <div>
            <div><Navbar/></div>
            <div><Login/></div>
        </div>
    );
}