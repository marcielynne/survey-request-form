import React, {Component} from 'react';

// Component to display values based on which row a user clicks
class RowResults extends Component {
    render() {
        return (
            // Values are populated from the singleRow object created in the Results component.
            <div>
                <img src={this.props.singleRow.vendorImage} alt="vendor" id="vendorImage"></img><br/><br />
                <label id="resultsTitle">Vendor Information</label>
                <ul>
                    <li>Vendor: {this.props.singleRow.projectVendor}</li>
                    <li>Species: {this.props.singleRow.vendorSpecies}</li>
                    <li>Home: {this.props.singleRow.vendorHouse}</li>
                    <li>Ancestry: {this.props.singleRow.vendorAncestry}</li>                 
                </ul>
                <label id="resultsTitle">Project Information</label>
                <ul>
                    <li>Project Name: {this.props.singleRow.projectName}</li>
                    <li>SRID: {this.props.singleRow.projectSRID}</li>
                    <li>Bill Num Type: {this.props.singleRow.projectBillNumType}</li>
                    <li>Bill Num Value: {this.props.singleRow.projectBillNumValue}</li>
                    <li>Date Requested: {this.props.singleRow.projectDateReq}</li>
                    <li>Asset Area: {this.props.singleRow.projectAssetArea}</li>
                    <li>Project Type: {this.props.singleRow.projectType}</li>
                    <li>Latitude: {this.props.singleRow.projectLat}</li>
                    <li>Longitude: {this.props.singleRow.projectLon}</li>                    
                </ul>
            </div>  
            
        );
    }
}


export default RowResults;