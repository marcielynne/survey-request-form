import React, { Component } from 'react';
import RowResult from './RowResult';

class Results extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            showValues: false,
            singleRow: []
        };
    }

    handleChange = (row) => {
        // console.log(row);
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

            {
                this.state.showValues ? 
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
