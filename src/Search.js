import React, { Component } from 'react';
import Results from './Results';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            searchResults: [],
            showValues: false
        };
    }

    handleChange = (evt) => {
        let {name, value} = evt.target;
        this.setState({ [name]: value });
    } 

    compareObjects = (o1, o2) => {
        var k = '';
        for(k in o1) if(o1[k] !== o2[k]) return false;
        for(k in o2) if(o1[k] !== o2[k]) return false;
        return true;
    }

    itemExists = (arr, obj) => {
        for (var i = 0; i < arr.length; i++) {
            if (this.compareObjects(arr[i], obj)) {
                return true;
            }
        }
        return false;
    }


    updateSearchResults = (i) => {
        this.setState(prevState => {
            return {
                searchResults: [
                    ...prevState.searchResults, this.props.surveyRequests[i]
                ]
            }
        })
    }


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

    displayValues = () => {
        if (this.state.searchResults.length > 0) {
            // console.log(this.state.searchResults);
            this.setState({
                showValues: true
            })
        } else {
            var addMessage = "No results found";
            alert(addMessage);
            this.setState({searchValue: ''})
        }
    }

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
            {
                this.state.showValues ? 
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
