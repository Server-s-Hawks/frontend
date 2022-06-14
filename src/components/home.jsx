import React, { Component } from 'react';

import { Login } from './login';
import {Navbar} from './navbar.jsx';

export const Home=()=>{



    return (
        <div>
            <div><Navbar/></div>
            <div><Login/></div>
        </div>
    );
}