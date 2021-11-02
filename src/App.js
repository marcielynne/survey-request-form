import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Nav from './Nav';
import Main from './Main';
import Projects from './Projects';
import Time from './Time';
import Search from './Search';

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Create object to store project values. This will be accessed by the Main component.
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
        vendorAncestry: "PURE-BLOOD",
        vendorHouse: "SLYTHERIN",
        vendorImage: "http://hp-api.herokuapp.com/images/draco.jpg",
        vendorName: "DRACO MALFOY",
        vendorSpecies: "HUMAN"
      }]
    };
  }

  // Create function to pass to Main component to be used to add values to the previously created object.
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
      // Utilize BrowserRouter to create Routes to Main, Project, Time, and Search components
      <HashRouter>
        <div>
          <Nav />
          {/* Pass arrayResults and myFunction to Main component */}
          <Route exact path="/" 
            render={(props) => <Main {...props} surveyRequests={this.state.surveyRequests} myFunction={this.handleAddNew} />}
          />
          {/* Pass arrayResults to Projects component */}
          <Route path="/projects" 
            render={(props) => <Projects {...props} surveyRequests={this.state.surveyRequests} />} 
          />
          <Route path="/time" component={Time} />
          {/* Pass surveyRequests to Search component */}
          <Route path="/search" 
            render={(props) => <Search {...props} surveyRequests={this.state.surveyRequests} />} 
          />
        </div>
      </HashRouter>
    );
  }

}

export default App;
