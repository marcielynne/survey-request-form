import React, { Component } from 'react';
import {Input, Search} from './Main';
import Map from './Map';
import Nav from './Nav';

class App extends Component {  
    render () {
        return (
            <div>
                <Nav />
                <div className="overall-flex">
                    <div id="mapDiv">
                        <Map />
                    </div>
                    <form name="inputForm" method="POST" className="fieldset">
                        <Input />
                        <Search />
                    </form>
                </div>
            </div>
        );
    }
}

export default App;
