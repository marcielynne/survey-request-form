import React, { Component } from 'react';
import Map from './Map';
import Input from './Input';

// Main component used for displaying the Input component which includes the map function.
class Main extends Component {  
    render () {
        return (
                <div>               
                    <div className="overall-flex">
                        <div id="mapDiv">
                            <Map />
                        </div>
                        <div>
                            {/* Pass surveyRequests and myFunction to the Input component */}
                            <Input 
                                surveyRequests={this.props.surveyRequests} 
                                myFunction={this.props.myFunction}
                            />
                        </div>
                    </div>
                </div>
        );
    }
}

export default Main;
