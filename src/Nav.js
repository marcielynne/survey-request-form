import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
    <div className="main-nav">
        <ul className="nav">
            <li className="item" id="item-1"><Link exact="true" to="/">Projects</Link></li>
            <li className="item" id="item-2"><Link to="/validation">Validation</Link></li>
            <li className="logo"><img src="img/3d-logo.png" alt="Company Logo" id="image" /></li>
            <li className="item" id="item-3"><Link to="/invoicing">Invoicing</Link></li>
            <li className="item" id="item-4"><Link to="/time">Time</Link></li>
        </ul>
    </div>
);

export default Nav;

