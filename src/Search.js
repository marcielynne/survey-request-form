import React, { Component } from 'react';
import Results from './Results';

// Search component used to retrieve values from the surveyRequests object. Results are stored in the searchResults object created below. 
class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            searchResults: [],
            showValues: false
        };
    }

    // Set the state of input values on change event
    handleChange = (evt) => {
        let {name, value} = evt.target;
        this.setState({ [name]: value });
    } 

    // The compareObjects function compares values added to an object. If a record does not exactly match another record, return false. Ultimately, records that match exactly will not be shown in the results table.
    compareObjects = (o1, o2) => {
        var k = '';
        for(k in o1) if(o1[k] !== o2[k]) return false;
        for(k in o2) if(o1[k] !== o2[k]) return false;
        return true;
    }

    // Used with the compareObjects function above, the itemExists function searchs an object to see if a value exists. 
    itemExists = (arr, obj) => {
        for (var i = 0; i < arr.length; i++) {
            if (this.compareObjects(arr[i], obj)) {
                return true;
            }
        }
        return false;
    }

    // Add values to the searchResults object based on search items found in surveyRequests object
    updateSearchResults = (i) => {
        this.setState(prevState => {
            return {
                searchResults: [
                    ...prevState.searchResults, this.props.surveyRequests[i]
                ]
            }
        })
    }

    // searchValue function incorporates functions listed above to retrieve results; called on change event of search input textbox
    searchValues = (evt) => {
        let {name, value} = evt.target;
        this.setState({ 
            [name]: value,
            searchResults: [] 
        }); 
        var searchValueUpper = this.state.searchValue.toUpperCase();

        if (searchValueUpper.length !== 0) {
            for(var i=0; i < this.props.surveyRequests.length; i++) {
                for(var key in this.props.surveyRequests[i]) {
                    if(this.props.surveyRequests[i][key].indexOf(searchValueUpper) !== -1) {
                        if(!this.itemExists(this.state.searchResults, this.props.surveyRequests[i])) {
                            this.updateSearchResults(i)
                        }
                    }
                }
            }
        }
    }

    // Called on the click event of the search button. If values are found, display the Results component
    displayValues = () => {
        if (this.state.searchResults.length > 0) {
            this.setState({
                showValues: true
            })
        } else {
            var addMessage = "No results found";
            alert(addMessage);
            this.setState({searchValue: ''})
        }
    }

    // clearValues function resets the state of of the input values to be blank
    clearValues = () => {
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
            projectLat: '',
            searchValue: '',
            vendorImage: '', 
            searchResults: [],
            showValues: false
        });
    }


    render() {
        return (
        <div className="search-display-flex">
            <h2 id="existingRequests">Search Existing Requests</h2>

            {/* Search Value textbox */}
            <label htmlFor="searchValue">Value:</label><br />
            <input type="text" id="searchValue" name="searchValue" value={this.state.searchValue} onChange={this.searchValues}/><br />

            {/* Search button */}
            <button className="button" id="btnSearch" type="button" onClick={this.displayValues}>
                Search
            </button>
            {/* Display the Results component if values are found in the search */}
            {
                this.state.showValues ? 
                        // Pass searchResults and clearValues to the Results component
                        <Results 
                            searchResults={this.state.searchResults}
                            clearValues={this.clearValues}
                        >     
                        </Results> : null
            }
        </div>
        );
    }
}

export default Search;
