import React, { Component } from 'react';

// The Projects component lists all projects that are currently stored.
class Projects extends Component {
    render() {
        return (
            <div id="resultsList">
                {/* Map over the surveyRequests object to display the data */}
                {this.props.surveyRequests.map((data, index) =>
                    <div key={index}>
                    <label id="resultsTitle">Project information for: <i>{data.projectName}</i> </label><br />
                    {/* Display the vendor image stored in the object, which was pulled from the Harry Potter API */}
                    <img src={data.vendorImage} alt="vendor" id="vendorImage"></img>
                    {/* Map over and display all values from the surveyRequests object */}
                    <ul>
                        <li>Vendor: {data.projectVendor}</li>
                        <li>Species: {data.vendorSpecies}</li>
                        <li>House: {data.vendorHouse}</li>
                        <li>Ancestry: {data.vendorAncestry}</li>
                        <li>Project Name: {data.projectName}</li>
                        <li>SRID: {data.projectSRID}</li>
                        <li>Bill Num Type: {data.projectBillNumType}</li>
                        <li>Bill Num Value: {data.projectBillNumValue}</li>
                        <li>Date Requested: {data.projectDateReq}</li>
                        <li>Asset Area: {data.projectAssetArea}</li>
                        <li>Project Type: {data.projectType}</li>
                        <li>Latitude: {data.projectLat}</li>
                        <li>Longitude: {data.projectLon}</li>
                    </ul><br />
                    </div>
                    )}
            </div>
        );
    }
}

export default Projects;
