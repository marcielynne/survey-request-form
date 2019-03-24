import React from 'react';
import { Link } from 'react-router-dom';

// Navigation component. This incorporates Links used in React Router. 
const Nav = () => (
    <div className="main-nav">
        <ul className="nav">
            <li className="item" id="item-1"><Link exact="true" to="/">Main</Link></li>
            <li className="item" id="item-2"><Link to="/projects">Projects</Link></li>
            <li className="logo"><img src="img/3d-logo.png" alt="Company Logo" id="image" /></li>
            <li className="item" id="item-3"><Link to="/search">Search</Link></li>
            <li className="item" id="item-4"><Link to="/time">Time</Link></li>
        </ul>
    </div>
);

export default Nav;

