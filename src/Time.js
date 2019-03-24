import React, { Component } from 'react';

// Time component. At the moment, this does not do anything other than call a random picture of Nick Cage.
class Time extends Component {

    render() {
        return (
        <div>
            <h1>This will be where the time magic happens.
                <div>
                    <img src="https://www.placecage.com/200/300" alt="nick cage"/>
                </div>
            </h1>
        </div>
        );
    }
}

export default Time;
