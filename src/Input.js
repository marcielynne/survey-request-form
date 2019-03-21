import React, {Component} from 'react';
import Search from './Search';

class Input extends Component {
    
    constructor(props) {
        super(props);
        this.inputLat = React.createRef();
        this.inputLon = React.createRef();
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
            projectLat: '',
            surveyRequests: [],
            assetAreas: [],
            vendorNames: [],
            projectTypes: [],
            billNumTypes: [],
            vendorImage:'',
            vendorName:'',
            vendorSpecies: '',
            vendorHouse: '',
            vendorAncestry: ''
        };
    }


    fetchData = (url) => {
        return fetch(url)
                 .then(this.checkStatus)  
                 .then(res => res.json())
                 .catch(error => console.log('Looks like there was a problem!', error))
    }

    checkStatus = (response) => {
        if (response.ok) {
          return Promise.resolve(response);
        } else {
          return Promise.reject(new Error(response.statusText));
        }
      }

       
    componentDidMount() {      
        Promise.all([
            this.fetchData('https://swapi.co/api/planets/'),
            this.fetchData('http://hp-api.herokuapp.com/api/characters'),
            this.fetchData('https://swapi.co/api/people/'),
            this.fetchData('https://api.openbrewerydb.org/breweries')
        ])
        .then(data => {
            const assetAreas = data[0].results.map((assetArea) => {
                return(
                    <option key={assetArea.url}>{assetArea.name}</option>
                )
            });
            const vendorNames = data[1].map((vendorName) => {
                return(
                    <option 
                        key={vendorName.image} 
                        data-key={vendorName.image}
                        vendor-name={vendorName.name}
                        species={vendorName.species}
                        house={vendorName.house}
                        ancestry={vendorName.ancestry}
                        onClick={this.onSelect}>{vendorName.name}</option>
                )
            });
            const projectTypes = data[2].results.map((projectType) => {
                return(
                    <option key={projectType.url}>{projectType.name}</option>
                )
            });
            const billNumTypes = data[3].map((billNumType) => {
                return(
                    <option key={billNumType.website_url}>{billNumType.name}</option>
                )
            });
            this.setState({
                assetAreas: assetAreas,
                vendorNames: vendorNames,
                projectTypes: projectTypes,
                billNumTypes: billNumTypes
            })
        })
    }
 

    onSelect = (evt) => {
        const selectedIndex = evt.target.options.selectedIndex;
        let {name, value} = evt.target;
        this.setState({ 
            [name]: value, 
            vendorImage: (evt.target.options[selectedIndex].getAttribute('data-key')),
            vendorName: (evt.target.options[selectedIndex].getAttribute('vendor-name')),
            vendorSpecies: (evt.target.options[selectedIndex].getAttribute('species')),
            vendorHouse: (evt.target.options[selectedIndex].getAttribute('house')),
            vendorAncestry: (evt.target.options[selectedIndex].getAttribute('ancestry'))
        });
    }

    handleChange = (evt) => {
        let {name, value} = evt.target;
        this.setState({ [name]: value });
    }  

    handleChangeLatLon = (evt) => {
        evt.preventDefault();
        if (this.inputLon.current.value === '') {
            alert('Please choose a point on the map first.');
            this.inputLon.current.focus();
        } else {
            this.setState({
                projectLon: this.inputLon.current.value,
                projectLat: this.inputLat.current.value
            })
        }   
    }

    handleAddNew = (e) => {
        var z = this.state.projectDateReq;
        var parts = z.split("/");
        var day = parseInt(parts[1], 10);
        var month = parseInt(parts[0], 10);
        var year = parseInt(parts[2], 10);
        
        if (
            this.state.projectName === '' ||
            this.state.projectSRID === '' ||
            this.state.projectBillNumType === '' ||
            this.state.projectBillNumValue === '' ||
            this.state.projectVendor === '' ||
            this.state.projectDateReq === '' ||
            this.state.projectAssetArea === '' ||
            this.state.projectType === '' ||
            this.state.projectLon === '' ||
            this.state.projectLat === '' 
        ) {
            alert("Oops, looks like you missed some fields.")
        } else if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(z) || (year < 1900 || year > 2100 || month === 0 || month > 12 || day <= 0 || day > 31)) {
            alert("Date is not in the correct format or the value is wrong.")
        } else {
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
                            projectLon: this.state.projectLon,
                            projectLat: this.state.projectLat,
                            vendorImage: this.state.vendorImage,
                            vendorName: this.state.vendorName,
                            vendorSpecies: this.state.vendorSpecies,
                            vendorHouse: this.state.vendorHouse,
                            vendorAncestry: this.state.vendorAncestry
                            }
                        ]
                    }
                })
            var addMessage = "Yay! You added a thing!";
            alert(addMessage);
            this.inputLon.current.value = '';
            this.inputLat.current.value = '';
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
                projectLat: '',
                vendorImage: '',
                vendorName: '',
                vendorSpecies: '',
                vendorHouse: '',
                vendorAncestry: ''
            })
        }
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
                    ...prevState.searchResults, this.state.surveyRequests[i]
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

    render() {
        return (
            <form className="fieldset" name="inputForm">
                <div className="form-flex">
                <h2 id="newRequests">Enter New Survey Request</h2>
                
                {/* Project Name textbox */}
                <label htmlFor="projectName">Project Name:</label><br />
                <input type="text" id="projectName" name="projectName" onChange={this.handleChange} value={this.state.projectName} onFocus={this.handleChangeLatLon}/><br />

                {/* Project SRID textbox */}
                <label htmlFor="projectSRID">SRID:</label><br />
                <input type="text" id="projectSRID" name="projectSRID" onChange={this.handleChange} value={this.state.projectSRID}/><br />

                {/* Project Bill Num Type listbox */}
                <label htmlFor="projectBillNumType">Bill Number Type:</label><br />
                <select id="projectBillNumType" name="projectBillNumType" onChange={this.handleChange} value={this.state.projectBillNumType}>
                    <option style={{display:"none"}}></option>
                    {this.state.billNumTypes}
                </select><br />


                {/* Project Bill Num Value textbox */}
                <label htmlFor="projectBillNumValue">Bill Number Value:</label><br />
                <input type="text" id="projectBillNumValue" name="projectBillNumValue" onChange={this.handleChange} value={this.state.projectBillNumValue} /><br />

                {/* Project Vendor listbox */}
                <label htmlFor="projectVendor">Vendor:</label><br />
                <select id="projectVendor" name="projectVendor" onChange={this.onSelect} value={this.state.projectVendor}>
                    <option style={{display:"none"}}></option>
                    {this.state.vendorNames}

                </select><br />

                {/* Project Date Req textbox for dates */}
                <label htmlFor="projectDateReq">Date Requested:</label><br />
                <input type="text" id="projectDateReq" name="projectDateReq" placeholder="DD/MM/YYYY" onChange={this.handleChange} value={this.state.projectDateReq} /><br />

                {/* Project Asset Area listbox */}
                <label htmlFor="projectAssetArea">Asset Area:</label><br />
                <select id="projectAssetArea" name="projectAssetArea" onChange={this.handleChange} value={this.state.projectAssetArea}>
                    <option style={{display:"none"}}></option>
                    {this.state.assetAreas}
                </select><br />

                {/* Project Type listbox */}
                <label htmlFor="projectType">Project Type:</label><br />
                <select id="projectType" name="projectType" onChange={this.handleChange} value={this.state.projectType}>
                    <option style={{display:"none"}}></option>
                    {this.state.projectTypes}

                </select><br />

                {/* Project Longitude textbox - readonly */}
                <label htmlFor="projectLon">X Longitude:</label><br />
                <input type="text" id="projectLon" name="projectLon" ref={this.inputLon} readOnly/><br />

                {/* Project Latitude textbox - readonly */}
                <label htmlFor="projectLat">Y Latitude:</label><br />
                <input type="text" id="projectLat" name="projectLat" ref={this.inputLat} readOnly/><br />

                {/* Submit button */}
                <button className="button" id="btnSubmit" type="button" onClick={this.handleAddNew}>
                    Submit
                </button>
            </div>

                <Search
                    surveyRequests={this.state.surveyRequests}
                />

            </form>    
            
        );
    }
}


export default Input;