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
                {this.props.arrayResults.map((data, index) =>
                    <div key={index}>
                    <img src={data.vendorImage} alt="vendor" id="vendorImage"></img> <br></br> <br></br>
                    <label id="resultsTitle">Vendor Information</label>
                    <ul>
                        <li id="resultsList">Vendor: {data.projectVendor}</li>
                    </ul>
                    </div>
                    )}
            </div>

        );
    }
}

export default Validation;
