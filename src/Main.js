import React, { Component } from 'react';
import Map from './Map';
import Input from './Input';

class App extends Component {  
    render () {
        return (
                <div>               
                    <div className="overall-flex">
                        <div id="mapDiv">
                            <Map />
                        </div>
                        <div>
                            <Input />
                        </div>
                    </div>
                </div>
        );
    }
}

export default App;
