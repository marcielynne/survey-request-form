import React, { Component } from 'react';

// The Projects component lists all projects that are currently stored.
class Projects extends Component {
    render() {
        return (
            <div>
                {/* Map over the surveyRequests object to display the data */}
                {this.props.surveyRequests.map((data, index) =>
                    <div key={index}>
                    {/* Display the vendor image stored in the object, which was pulled from the Harry Potter API */}
                    <img src={data.vendorImage} alt="vendor" id="vendorImage"></img> <br></br> <br></br>
                    <label id="resultsTitle">Project Information</label>
                    {/* Map over and display all values from the surveyRequests object */}
                    <ul>
                        <li id="resultsList">Vendor: {data.projectVendor}</li>
                        <li id="resultsList">Species: {data.vendorSpecies}</li>
                        <li id="resultsList">House: {data.vendorHouse}</li>
                        <li id="resultsList">Ancestry: {data.vendorAncestry}</li>
                        <li id="resultsList">Project Name: {data.projectName}</li>
                        <li id="resultsList">SRID: {data.projectSRID}</li>
                        <li id="resultsList">Bill Num Type: {data.projectBillNumType}</li>
                        <li id="resultsList">Bill Num Value: {data.projectBillNumValue}</li>
                        <li id="resultsList">Date Requested: {data.projectDateReq}</li>
                        <li id="resultsList">Asset Area: {data.projectAssetArea}</li>
                        <li id="resultsList">Project Type: {data.projectType}</li>
                        <li id="resultsList">Latitude: {data.projectLat}</li>
                        <li id="resultsList">Longitude: {data.projectLon}</li>
                    </ul>
                    </div>
                    )}
            </div>

        );
    }
}

export default Projects;
