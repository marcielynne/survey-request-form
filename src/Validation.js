import React, { Component } from 'react';


class Validation extends Component {

/*     render() {
        return (
        <div>
            <h1>This will be where the Validation magic happens.
                <div>
                    <img src="https://www.placecage.com/c/200/300" alt="nick cage"/>
                </div>
            </h1>
        </div>
        );
    } */

    render() {
        return (
            <div>
                <img src={this.props.surveyRequests.vendorImage} alt="vendor" id="vendorImage"></img><br/><br />
                <label id="resultsTitle">Vendor Information</label>
                <ul>
                    <li id="resultsList">Vendor: {this.props.surveyRequests.projectVendor}</li>              
                </ul>
            </div>  
            
        );
    }
}

export default Validation;
