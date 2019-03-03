import React from 'react';

class Validation extends React.Component {
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

                <h1>This will be where the validation magic happens.</h1><br />
                <h1><img src="https://www.placecage.com/c/200/300" /></h1>

            </div>                
        );
    }
}

  
  // ========================================
  
export default Validation;