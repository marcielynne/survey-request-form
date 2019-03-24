import React, { Component } from 'react';
import RowResult from './RowResult';

// Results component shows the values from searchResults that was created in the Search component
class Results extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            showValues: false,
            singleRow: []
        };
    }

    // Set the state of singleRow and showValues when a table row is clicked
    handleChange = (row) => {
        this.setState({
            singleRow: row,
            showValues: true
        })
    }

    render() {
        return (
        <div>
            {/* Table that is only displayed if a record exists to display the search results */}
            <table id="resultsTable" name="resultsTable" summary="Table of search results." >
                <thead id="thead"></thead>
                <tbody id="tbody">                 
                    <tr>
                        <th>Project Name</th>
                        <th>SRID</th>
                        <th>Billing Number</th>
                    </tr>
                    
                    {/* Map over and display the results from searchResults object created in the Search component */}
                    {this.props.searchResults.map((data,index) => 
                    <tr key={index.toString()} value={index} onClick={() => this.handleChange(data)}>
                        <td>{data.projectName}</td>
                        <td>{data.projectSRID}</td>
                        <td>{data.projectBillNumType}</td>
                        <td style={{display: "none"}}>{data.projectBillNumValue}</td>
                        <td style={{display: "none"}}>{data.projectVendor}</td>
                        <td style={{display: "none"}}>{data.projectDateReq}</td>
                        <td style={{display: "none"}}>{data.projectAssetArea}</td>
                        <td style={{display: "none"}}>{data.projectType}</td>
                        <td style={{display: "none"}}>{data.projectLon}</td>
                        <td style={{display: "none"}}>{data.projectLat}</td>
                        <td style={{display: "none"}}>{data.vendorImage}</td>
                        </tr>
                    )}

                </tbody>
            </table><br />

            {/* Clear button */}
            <button className="button" id="btnClear" type="button" onClick={this.props.clearValues}>
                Clear
            </button><br /><br />

            {/* If there are values to display, show the RowResult component */}
            {
                this.state.showValues ? 
                    // Pass singleRow to RowResult component
                    <RowResult 
                        singleRow={this.state.singleRow}
                    >     
                    </RowResult> : null
            }

        </div>
        );
    }
}

export default Results;
