import React from 'react';

var surveyRequests = [];
var searchResults = [];

// INPUT CLASS =================================================
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.addValues = this.addValues.bind(this);
    }
    addValues() {
        var uniqueRequest = {
            projectNames: document.getElementById("projectName").value.toUpperCase(),
            projectSRIDs: document.getElementById("projectSRID").value,
            projectBillNumTypes: document.getElementById("projectBillNumType").value,
            projectBillNumValues: document.getElementById("projectBillNumValue").value.toUpperCase(),
            projectVendors: document.getElementById("projectVendor").value,
            projectDateReqs: document.getElementById("projectDateReq").value,
            projectAssetAreas: document.getElementById("projectAssetArea").value,
            projectTypes: document.getElementById("projectType").value,
            projectLons: document.getElementById("projectLon").value,
            projectLats: document.getElementById("projectLat").value
        };

        surveyRequests.push(uniqueRequest);
        this.clearSubmit();
    }

    clearSubmit() {
        document.getElementById("projectName").value="";
        document.getElementById("projectSRID").value="";
        document.getElementById("projectBillNumType").value="";
        document.getElementById("projectBillNumValue").value="";
        document.getElementById("projectVendor").value="";
        document.getElementById("projectDateReq").value="";
        document.getElementById("projectAssetArea").value="";
        document.getElementById("projectType").value="";
        document.getElementById("projectLon").value="";
        document.getElementById("projectLat").value="";
        document.getElementById("projectName").focus();
    }
    
    render() {
        return (
            <div className="overall-flex">
                <form name="inputForm" className="fieldset" method="POST" action="index.html">
                    <div className="form-flex">
                        <h2 id="newRequests">Enter New Survey Request</h2>
                        
                        {/* Project Name textbox */}
                        <label htmlFor="projectName">Project Name:</label><br />
                        <input type="text" id="projectName" name="project_name" /><br />

                        {/* Project SRID textbox */}
                        <label htmlFor="projectSRID">SRID:</label><br />
                        <input type="text" id="projectSRID" name="project_srid" /><br />

                        {/* Project Bill Num Type listbox */}
                        <label htmlFor="projectBillNumType">Bill Number Type:</label><br />
                        <select id="projectBillNumType" name="project_bill_num_type">
                            <option style={{display:"none"}}></option>
                            <option value="AFE">AFE</option>
                            <option value="COST CENTER">COST CENTER</option>
                            <option value="WORK ORDER">WORK ORDER</option>
                            <option value="OTHER">OTHER</option>
                        </select><br />

                        {/* Project Bill Num Value textbox */}
                        <label htmlFor="projectBillNumValue">Bill Number Value:</label><br />
                        <input type="text" id="projectBillNumValue" name="project_bill_num_value" /><br />

                        {/* Project Vendor listbox */}
                        <label htmlFor="projectVendor">Vendor:</label><br />
                        <select id="projectVendor" name="project_vendor">
                            <option style={{display:"none"}}></option>
                            <option value="609 CONSULTING LLC">609 CONSULTING LLC</option>
                            <option value="ACKLAM INC">ACKLAM INC</option>
                            <option value="APEX COMPANIES LLC">APEX COMPANIES LLC</option>
                            <option value="ARCADIS US INC">ARCADIS US INC</option>
                            <option value="BASELINE ENGINEERING CORPORATION">BASELINE ENGINEERING CORPORATION</option>
                            <option value="CH FENSTERMAKER AND ASSOCIATES">CH FENSTERMAKER AND ASSOCIATES</option>
                            <option value="CRAFTON TULL SURVEYING">CRAFTON TULL SURVEYING</option>
                            <option value="DATAWING">DATAWING</option>
                            <option value="DR GRIFFIN AND ASSOCIATES INC">DR GRIFFIN AND ASSOCIATES INC</option>
                            <option value="ELS SURVEYING AND MAPPING INC">ELS SURVEYING AND MAPPING INC</option>
                            <option value="HUNT GUILLOT AND ASSOCIATES LLC">HUNT GUILLOT AND ASSOCIATES LLC</option>
                            <option value="INTERNAL DATA COLLECTOR">INTERNAL DATA COLLECTOR</option>
                            <option value="KING SURVEYORS LLC">KING SURVEYORS LLC</option>
                            <option value="LAND SURVEYING INCORPORATED">LAND SURVEYING INCORPORATED</option>
                            <option value="LW SURVEY CO">LW SURVEY CO</option>
                            <option value="MAVERICK ENGINEERING  INC">MAVERICK ENGINEERING  INC</option>
                            <option value="MORRIS P HERBERT INC">MORRIS P HERBERT INC</option>
                            <option value="OCEANEERING INTL INC">OCEANEERING INTL INC</option>
                            <option value="OUTLAW ENGINEERING INC">OUTLAW ENGINEERING INC</option>
                            <option value="PETROLEUM FIELD SERVICES LLC">PETROLEUM FIELD SERVICES LLC</option>
                            <option value="R SQUARED GLOBAL LLC">R SQUARED GLOBAL LLC</option>
                            <option value="SURVEYING AND MAPPING LLC">SURVEYING AND MAPPING LLC</option>
                            <option value="SWCA ENVIRONMENTAL CONSULTANTS">SWCA ENVIRONMENTAL CONSULTANTS</option>
                            <option value="TOPOGRAPHIC LAND SURVEYORS CO">TOPOGRAPHIC LAND SURVEYORS CO</option>
                            <option value="TRANSGLOBAL SERVICES LLC">TRANSGLOBAL SERVICES LLC</option>
                            <option value="TRC PIPELINE SERVICES, LLC">TRC PIPELINE SERVICES LLC</option>
                            <option value="TRENDSETTER CONSTRUCTION INC">TRENDSETTER CONSTRUCTION INC</option>
                            <option value="TWO DOT CONSULTING LLC">TWO DOT CONSULTING LLC</option>
                            <option value="UELS LLC">UELS LLC</option>
                            <option value="UNKNOWN">UNKNOWN</option>
                            <option value="WEST COMPANY OF MIDLAND LLC">WEST COMPANY OF MIDLAND LLC</option>
                            <option value="WHITENTON GROUP">WHITENTON GROUP</option>
                            <option value="WOOD GROUP PLS">WOOD GROUP PLS</option>
                            <option value="WWC ENGINEERING">WWC ENGINEERING</option>
                        </select><br />

                        {/* Project Date Req textbox for dates */}
                        <label htmlFor="projectDateReq">Date Requested:</label><br />
                        <input type="text" id="projectDateReq" name="project_date_req" placeholder="DD/MM/YYYY" /><br />

                        {/* Project Asset Area listbox */}
                        <label htmlFor="projectAssetArea">Asset Area:</label><br />
                        <select id="projectAssetArea" name="project_asset_area">
                            <option style={{display:"none"}}></option>
                            <option value="BOSSIER">BOSSIER</option>
                            <option value="BUFFALO ROSE">BUFFALO ROSE</option>
                            <option value="EAST TEXAS">EAST TEXAS</option>
                            <option value="DELAWARE BASIN">DELAWARE BASIN</option>
                            <option value="DEW/FREESTONE">DEW/FREESTONE</option>
                            <option value="EAST CHALK">EAST CHALK</option>
                            <option value="GREATER GREEN RIVER BASIN">GREATER GREEN RIVER BASIN</option>
                            <option value="GREATER NATURAL BUTTES">GREATER NATURAL BUTTES</option>
                            <option value="MARCELLUS">MARCELLUS</option>
                            <option value="MAVERICK">MAVERICK</option>
                            <option value="MONTANA">MONTANA</option>
                            <option value="NORTHSTARS/EAGLEBINE">NORTHSTARS/EAGLEBINE</option>
                            <option value="POWDER RIVER BASIN">POWDER RIVER BASIN</option>
                            <option value="ROCKIES EOR">ROCKIES EOR</option>
                            <option value="WATTENBERG">WATTENBERG</option>
                            <option value="WILLOW RIDGE">WILLOW RIDGE</option>
                            <option value="NORTH LOUISIANA">NORTH LOUISIANA</option>
                        </select><br />

                        {/* Project Type listbox */}
                        <label htmlFor="projectType">Project Type:</label><br />
                        <select id="projectType" name="project_type">
                            <option style={{display:"none"}}></option>
                            <option value="ACCESS ROAD MAP">ACCESS ROAD MAP</option>
                            <option value="BOUNDARY SURVEY">BOUNDARY SURVEY</option>
                            <option value="CLEARANCE MAP">CLEARANCE MAP</option>
                            <option value="ELECTRICAL AS-BUILT">ELECTRICAL AS-BUILT</option>
                            <option value="ELECTRICAL PRELIMINARY">ELECTRICAL PRELIMINARY</option>
                            <option value="FACILITY SITE AS-BUILT">FACILITY SITE AS-BUILT</option>
                            <option value="FACILITY SITE PRELIMINARY">FACILITY SITE PRELIMINARY</option>
                            <option value="GENERAL MAP">GENERAL MAP</option>
                            <option value="PIPELINE CLOSED DITCH AS-BUILT">PIPELINE CLOSED DITCH AS-BUILT</option>
                            <option value="PIPELINE OPEN DITCH AS-BUILT">PIPELINE OPEN DITCH AS-BUILT</option>
                            <option value="PIPELINE PRELIMINARY">PIPELINE PRELIMINARY</option>
                            <option value="RADIUS MAP">RADIUS MAP</option>
                            <option value="RIGHT OF WAY EASEMENT">RIGHT OF WAY EASEMENT</option>
                            <option value="TOPOGRAPHICAL MAP">TOPOGRAPHICAL MAP</option>
                            <option value="WATER WELL">WATER WELL</option>
                            <option value="WELL AS-BUILT">WELL AS-BUILT</option>
                            <option value="WELL AS-DRILLED">WELL AS-DRILLED</option>
                            <option value="WELL LOCATION DOCUMENT">WELL LOCATION DOCUMENT</option>
                            <option value="WELL PAD DESIGN SUMMARY">WELL PAD DESIGN SUMMARY</option>
                        </select><br />

                        {/* Project Longitude textbox - readonly */}
                        <label htmlFor="projectLon">X Longitude:</label><br />
                        <input type="text" id="projectLon" name="project_lon" readOnly /><br />

                        {/* Project Latitude textbox - readonly */}
                        <label htmlFor="projectLat">Y Latitude:</label><br />
                        <input type="text" id="projectLat" name="project_lat" readOnly /><br />

                        {/* Submit button */}
                        <button className="button" id="btnSubmit" type="button" onClick={this.addValues}>
                            Submit
                        </button>
                    </div>
                </form>
            </div> 
        );
    }
}


// SEARCH CLASS =================================================
class Search extends React.Component {
    constructor(props) {
        super(props);
        //this.compareObjects = this.compareObjects.bind(this);
        //this.itemExists = this.itemExists.bind(this);
        this.searchValues = this.searchValues.bind(this);
        this.clearValues = this.clearValues.bind(this);
    }

    compareObjects(o1, o2) {
        var k = '';
        for(k in o1) if(o1[k] !== o2[k]) return false;
        for(k in o2) if(o1[k] !== o2[k]) return false;
        return true;
    }

    itemExists(arr, obj) {
        for (var i = 0; i < arr.length; i++) {
            if (this.compareObjects(arr[i], obj)) {
                return true;
            }
        }
        return false;
    }

    saveAndShow() {
        var tbody = document.getElementById("tbody");
        var thead = document.getElementById("thead");

        tbody.innerHTML="";
        thead.innerHTML="";
        for (var i=0; i < searchResults.length; i += 1) {
            var tr="<tr>";
            var th=`<tr><th>Project Name</th> <th>SRID</th> <th>Billing Number</th> <th style='display:none'>Bill Num Type</th></tr>`; 
    
            // Build the table to display values from the searchResults object. Only show fields for the project name, SRID, and bill number.
            tr += 
                "<td>" + searchResults[i].projectNames + "</td>" +    
                "<td>" + searchResults[i].projectSRIDs + "</td>" +
                "<td style='display:none'>" + searchResults[i].projectBillNumTypes + "</td>" + 
                "<td>" + searchResults[i].projectBillNumValues + "</td>" + 
                "<td style='display:none'>" + searchResults[i].projectVendors + "</td>" +
                "<td style='display:none'>" + searchResults[i].projectDateReqs + "</td>" +
                "<td style='display:none'>" + searchResults[i].projectAssetAreas + "</td>" +
                "<td style='display:none'>" + searchResults[i].projectTypes + "</td>" +
                "<td style='display:none'>" + searchResults[i].projectLons + "</td>" +
                "<td style='display:none'>" + searchResults[i].projectLats + "</td>" +            
                "</tr>";
    
            thead.innerHTML = th;
            tbody.innerHTML += tr;

            document.getElementById("btnClear").style.display = "inline";
        }
    }

    searchValues() {
        var searchValueUpper = document.getElementById("searchValue").value.toUpperCase();
        
        if (searchValueUpper.length !== 0) {
            for(var i=0; i < surveyRequests.length; i++) {
                for(var key in surveyRequests[i]) {
                    if(surveyRequests[i][key].indexOf(searchValueUpper) !== -1) {
                        if(!this.itemExists(searchResults, surveyRequests[i])) {
                            searchResults.push(surveyRequests[i]);
                        }
                    }
                }
            }
        }
        console.log(surveyRequests);

        if (searchResults.length > 0) {
            this.saveAndShow();
        } else {
            this.clearValues();
            alert("No results found.");
        }

    }

    clearValues() {
        document.getElementById("tbody").innerHTML="";
        document.getElementById("thead").innerHTML="";
        document.getElementById("btnClear").style.display = "none";
        document.getElementById("searchValue").value="";
    }

    render() {
        return (
            <div className="overall-flex">
                <form name="inputForm" className="fieldset" method="POST" action="index.html">
                    <div className="search-display-flex">
                        <h2 id="existingRequests">Search Existing Requests</h2>

                        {/* Search Value textbox */}
                        <label htmlFor="searchValue">Value:</label><br />
                        <input type="text" id="searchValue" name="search_value" /><br />

                        {/* Search button */}
                        <button className="button" id="btnSearch" type="button" onClick={this.searchValues}>
                            Search
                        </button>

                        {/* Table that is only displayed if a record exists to display the search results */}
                        <table id="resultsTable" summary="Table of search results.">
                            <thead id="thead"></thead>
                            <tbody id="tbody"></tbody>
                        </table><br />

                        {/* Clear button */}
                        <button className="button" id="btnClear" type="button" style={{display:"none"}} onClick={this.clearValues}>
                            Clear
                        </button>
                    </div>
                </form>
            </div> 
        );
    }
}

  // ========================================
  
export {Input, Search};