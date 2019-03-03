import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div className="main-nav">
                <ul className="nav">
                    <li className="item" id="item-1">Projects</li>
                    <li className="item" id="item-2">Validation</li>
                    <li className="logo"><img src="img/3d-logo.png" alt="Company Logo" id="image" /></li>
                    <li className="item" id="item-3">Invoicing</li>
                    <li className="item" id="item-4">Time</li>
                </ul>
            </div>
        );
    }
}

  
export default Nav;