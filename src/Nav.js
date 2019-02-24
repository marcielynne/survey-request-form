import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <div className="main-nav">
                <ul className="nav">
                    <li className="item" id="item-1"><a href="index.html">Projects</a></li>
                    <li className="item" id="item-2"><a href="validation.html">Validation</a></li>
                    <li className="logo"><img src="img/3d-logo.png" alt="Company Logo" id="image" /></li>
                    <li className="item" id="item-3"><a href="invoicing.html">Invoicing</a></li>
                    <li className="item" id="item-4"><a href="time.html">Time</a></li>
                </ul>
            </div>
        );
    }
}

  
  // ========================================
  
export default Nav;