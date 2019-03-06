import React, {Component} from 'react';

class Input extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            projectName: '',
            projectSRID: '',
            projectBillNumType: '',
            projectBillNumValue: '',
            projectVendor: '',
            projectDateReq: '',
            projectAssetArea: '',
            projectType: '',
            projectLon: '',
            projectLat:'',
            surveyRequests: [],
            searchValue: '',
            searchResults: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleAddNew = this.handleAddNew.bind(this);
        this.displayValues = this.displayValues.bind(this);
        this.searchValues = this.searchValues.bind(this);
        this.saveAndShow = this.saveAndShow.bind(this);
        this.clearValues = this.clearValues.bind(this);
        this.populateBoxes = this.populateBoxes.bind(this);
    }

    handleChange (evt) {
        let {name, value} = evt.target;
        this.setState({ [name]: value });
    }  

    handleAddNew = (e) => {
        e.preventDefault();
            this.setState(prevState => {
                return {
                    surveyRequests: [
                        ...prevState.surveyRequests,
                        {
                        projectName: this.state.projectName.toUpperCase(),
                        projectSRID: this.state.projectSRID,
                        projectBillNumType: this.state.projectBillNumType.toUpperCase(),
                        projectBillNumValue: this.state.projectBillNumValue,
                        projectVendor: this.state.projectVendor.toUpperCase(),
                        projectDateReq: this.state.projectDateReq,
                        projectAssetArea: this.state.projectAssetArea.toUpperCase(),
                        projectType: this.state.projectType.toUpperCase(),
                        projectLon: document.getElementById("projectLon").value,
                        projectLat: document.getElementById("projectLat").value
                        }
                    ]
                }
            })
        var addMessage = "Yay! You added a thing!";
        alert(addMessage);
        this.setState({
            projectName: '', 
            projectSRID: '',
            projectBillNumType: '',
            projectBillNumValue: '',
            projectVendor: '',
            projectDateReq: '',
            projectAssetArea: '',
            projectType: '',
            projectLon: '',
            projectLat:''
        })
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


    updateSearchResults(i) {
        this.setState(prevState => {
            return {
                searchResults: [
                    ...prevState.searchResults, this.state.surveyRequests[i]
                ]
            }
        })
    }


    searchValues(evt) {
        let {name, value} = evt.target;
        this.setState({ 
            [name]: value,
            searchResults: [] 
        }); 
        var searchValueUpper = this.state.searchValue.toUpperCase();

        if (searchValueUpper.length !== 0) {
            for(var i=0; i < this.state.surveyRequests.length; i++) {
                for(var key in this.state.surveyRequests[i]) {
                    if(this.state.surveyRequests[i][key].indexOf(searchValueUpper) !== -1) {
                        if(!this.itemExists(this.state.searchResults, this.state.surveyRequests[i])) {
                            this.updateSearchResults(i)
                        }
                    }
                }
            }
        }
    }

    displayValues() {
        if (this.state.searchResults.length > 0) {
            console.log(this.state.searchResults);
            this.saveAndShow()
            this.populateBoxes()
        } else {
            var addMessage = "No results found";
            alert(addMessage);
            this.setState({searchValue: ''})
        }
    }


    saveAndShow() {
        var tbody = document.getElementById("tbody");
        var thead = document.getElementById("thead");

        tbody.innerHTML="";
        thead.innerHTML="";
        for (var i=0; i < this.state.searchResults.length; i += 1) {
            var tr="<tr>";
            var th=`<tr><th>Project Name</th> <th>SRID</th> <th>Billing Number</th> <th style='display:none'>Bill Num Type</th></tr>`; 
    
            // Build the table to display values from the searchResults object. Only show fields for the project name, SRID, and bill number.
            tr += 
                "<td>" + this.state.searchResults[i].projectName + "</td>" +    
                "<td>" + this.state.searchResults[i].projectSRID + "</td>" +
                "<td style='display:none'>" + this.state.searchResults[i].projectBillNumType + "</td>" + 
                "<td>" + this.state.searchResults[i].projectBillNumValue + "</td>" + 
                "<td style='display:none'>" + this.state.searchResults[i].projectVendor + "</td>" +
                "<td style='display:none'>" + this.state.searchResults[i].projectDateReq + "</td>" +
                "<td style='display:none'>" + this.state.searchResults[i].projectAssetArea + "</td>" +
                "<td style='display:none'>" + this.state.searchResults[i].projectType + "</td>" +
                "<td style='display:none'>" + this.state.searchResults[i].projectLon + "</td>" +
                "<td style='display:none'>" + this.state.searchResults[i].projectLat + "</td>" +            
                "</tr>";
    
            thead.innerHTML = th;
            tbody.innerHTML += tr;

            document.getElementById("btnClear").style.display = "inline";
        }
    }


    populateBoxes() {
        var table = document.getElementById("resultsTable");
        for(var i=1; i<table.rows.length; i++) {
            table.rows[i].onclick = function() {
                document.getElementById("projectName").value = (this.cells[0]).innerHTML;
                document.getElementById("projectSRID").value = (this.cells[1]).innerHTML;
                document.getElementById("projectBillNumType").value = (this.cells[2]).innerHTML;
                document.getElementById("projectBillNumValue").value = (this.cells[3]).innerHTML;
                document.getElementById("projectVendor").value = (this.cells[4]).innerHTML;
                document.getElementById("projectDateReq").value = (this.cells[5]).innerHTML;
                document.getElementById("projectAssetArea").value = (this.cells[6]).innerHTML;
                document.getElementById("projectType").value = (this.cells[7]).innerHTML;
                document.getElementById("projectLon").value = (this.cells[8]).innerHTML;
                document.getElementById("projectLat").value = (this.cells[9]).innerHTML;
            }
        }
    }
    
    clearValues() {
        this.setState ({
            projectName: '',
            projectSRID: '',
            projectBillNumType: '',
            projectBillNumValue: '',
            projectVendor: '',
            projectDateReq: '',
            projectAssetArea: '',
            projectType: '',
            projectLon: '',
            projectLat:'',
            searchValue: '', 
            searchResults: []
        });

        document.getElementById("tbody").innerHTML="";
        document.getElementById("thead").innerHTML="";
        document.getElementById("btnClear").style.display = "none";
        document.getElementById("projectName").focus();
    }



    render() {
        return (
            <form className="fieldset" name="inputForm">
                <div className="form-flex">
                <h2 id="newRequests">Enter New Survey Request</h2>
                
                {/* Project Name textbox */}
                <label htmlFor="projectName">Project Name:</label><br />
                <input type="text" id="projectName" name="projectName" onChange={this.handleChange} value={this.state.projectName}/><br />

                {/* Project SRID textbox */}
                <label htmlFor="projectSRID">SRID:</label><br />
                <input type="text" id="projectSRID" name="projectSRID" onChange={this.handleChange} value={this.state.projectSRID}/><br />

                {/* Project Bill Num Type listbox */}
                <label htmlFor="projectBillNumType">Bill Number Type:</label><br />
                <select id="projectBillNumType" name="projectBillNumType" onChange={this.handleChange} value={this.state.projectBillNumType}>
                    <option style={{display:"none"}}></option>
                    <option value="AFE">AFE</option>
                    <option value="COST CENTER">COST CENTER</option>
                    <option value="WORK ORDER">WORK ORDER</option>
                    <option value="OTHER">OTHER</option>
                </select><br />

                {/* Project Bill Num Value textbox */}
                <label htmlFor="projectBillNumValue">Bill Number Value:</label><br />
                <input type="text" id="projectBillNumValue" name="projectBillNumValue" onChange={this.handleChange} value={this.state.projectBillNumValue} /><br />

                {/* Project Vendor listbox */}
                <label htmlFor="projectVendor">Vendor:</label><br />
                <select id="projectVendor" name="projectVendor" onChange={this.handleChange} value={this.state.projectVendor}>
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
                <input type="text" id="projectDateReq" name="projectDateReq" placeholder="DD/MM/YYYY" onChange={this.handleChange} value={this.state.projectDateReq} /><br />

                {/* Project Asset Area listbox */}
                <label htmlFor="projectAssetArea">Asset Area:</label><br />
                <select id="projectAssetArea" name="projectAssetArea" onChange={this.handleChange} value={this.state.projectAssetArea}>
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
                <select id="projectType" name="projectType" onChange={this.handleChange} value={this.state.projectType}>
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
                <input type="text" id="projectLon" name="projectLon" readOnly value={this.state.projectLon}/><br />

                {/* Project Latitude textbox - readonly */}
                <label htmlFor="projectLat">Y Latitude:</label><br />
                <input type="text" id="projectLat" name="projectLat" readOnly value={this.state.projectLon}/><br />

                {/* Submit button */}
                <button className="button" id="btnSubmit" type="button" onClick={this.handleAddNew}>
                    Submit
                </button>
            </div>

                <div className="search-display-flex">
                    <h2 id="existingRequests">Search Existing Requests</h2>

                    {/* Search Value textbox */}
                    <label htmlFor="searchValue">Value:</label><br />
                    <input type="text" id="searchValue" name="searchValue" value={this.state.searchValue} onChange={this.searchValues}/><br />

                    {/* Search button */}
                    <button className="button" id="btnSearch" type="button" onClick={this.displayValues}>
                        Search
                    </button>

                    {/* Table that is only displayed if a record exists to display the search results */}
                    <table id="resultsTable" summary="Table of search results.">
                        <thead id="thead"></thead>
                        <tbody id="tbody">
                        </tbody>
                    </table><br />

                    {/* Clear button */}
                    <button className="button" id="btnClear" type="button" style={{display:"none"}} onClick={this.clearValues}>
                        Clear
                    </button>
                </div>
            </form>    
            
        );
    }
}


export default Input;