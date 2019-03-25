import React from 'react';
import { NavLink } from 'react-router-dom';

// Navigation component. This incorporates Links used in React Router. 
const Nav = () => (
    <div className="main-nav">
        <ul className="nav">
            <li className="item" id="item-1"><NavLink exact to="/">Main</NavLink></li>
            <li className="item" id="item-2"><NavLink to="/projects">Projects</NavLink></li>
            <li className="logo"><img src="img/3d-logo.png" alt="Company Logo" id="image" /></li>
            <li className="item" id="item-3"><NavLink to="/search">Search</NavLink></li>
            <li className="item" id="item-4"><NavLink to="/time">Time</NavLink></li>
        </ul>
    </div>
);

export default Nav;

