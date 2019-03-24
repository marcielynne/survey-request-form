import React, { Component } from 'react';

// Incoiving component. At the moment, this is not displayed and does not do anything other than call a random picture of Nick Cage.
class Invoicing extends Component {

    render() {
        return (
        <div>
            <h1>This will be where the invoicing magic happens.
                <div>
                    <img src="https://www.placecage.com/g/200/300" alt="nick cage"/>
                </div>
            </h1>
        </div>
        );
    }
}

export default Invoicing;
