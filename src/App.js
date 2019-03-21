import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './Nav';
import Main from './Main';
import Invoicing from './Invoicing';
import Validation from './Validation';
import Time from './Time';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surveyRequests:[{
        projectAssetArea: "YAVIN IV",
        projectBillNumType: "TRIM TAB BREWING",
        projectBillNumValue: "191",
        projectDateReq: "12/12/2019",
        projectLat: "42.05515118647973",
        projectLon: "-94.73632812499847",
        projectName: "TEST",
        projectSRID: "1234",
        projectType: "LUKE SKYWALKER",
        projectVendor: "DRACO MALFOY",
        vendorAncestry: "pure-blood",
        vendorHouse: "Slytherin",
        vendorImage: "http://hp-api.herokuapp.com/images/draco.jpg",
        vendorName: "Draco Malfoy",
        vendorSpecies: "human"
      }]
    };
  }

  handleAddNew = (newObject) => {

    this.setState(prevState => {
      return {
        surveyRequests: [
          ...prevState.surveyRequests,
          newObject
        ]
      }
    }, () => console.log(this.state.surveyRequests))

  }


  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Route exact path="/" 
            render={(props) => <Main {...props} arrayResults={this.state.surveyRequests} myFunction={this.handleAddNew} />}
          />
          <Route path="/invoicing" component={Invoicing} />
          <Route path="/validation" 
            render={(props) => <Validation {...props} arrayResults={this.state.surveyRequests} />} 
          />
          <Route path="/time" component={Time} />
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
