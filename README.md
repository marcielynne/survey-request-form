# Survey Request Form

This application completes the JavaScript/React course requirements through [Code Louisville](https://codelouisville.org/) for 2019. I used the same concept from my front-end web development project I completed in 2018 but changed the code to meet the JavaScript/React requirements in the following ways:
- [x] The project is responsive to different devices and/or browser sizes and screen resolutions <br>
- [x] The project was created using `create-react-app` and implements the React framework <br>
- [x] The project contains 4 navigable routes using React Router <br>
- [x] The project consumes 4 API resources:
    * The Asset Area input pulls values from https://swapi.co/api/planets/ <br>
    * The Vendor input pulls values from http://hp-api.herokuapp.com/api/characters including 4 additional pieces of information from the API based on which name is selected <br>
    * The Project Type input pulls values from https://swapi.co/api/people/ <br>
    * The Bill Number Type input pulls values from https://api.openbrewerydb.org/breweries <br>
- [x] The project code has comments <br>
- [x] The project contains this nifty README file explaining the project's purpose, functionality, and installation instructions <br>

Additionally, the app uses the React-ArcGIS library, which is a library of React components that use the ArcGIS API for JavaScript. React-ArcGIS uses esri-loader internally to load and interact with the AMD ArcGIS API for JavaScript, and provide a base for building mapping applications. More information can be found here: https://github.com/Esri/react-arcgis <br>

The app is hosted via GitHub pages at [Survey Request Form](https://marcielynne.github.io/survey-request-form-hosted/#/). HashRouter was used in this version for compatibility with GitHub pages. <br>

## Installing the App

1. Install Node.js https://nodejs.org/en/
2. Run `git clone https://github.com/marcielynne/survey-request-form.git`
3. `cd` into the directory and run the following:
    * `npm install --save react-router-dom @esri/react-arcgis`<br>
    * `npm start` to start the local development server
    
## App Description

The Survey Request Form was built to satisfy work order requests for land surveying projects. Users are required to click on the map to select a location. A red point appears on the map where the user clicks, and the user can click on the point after it has been added to the map to display the latitude and longiutde. Once a location has been selected, the user must fill out all input fields before submitting the project. Once a project has been submitted, users can search for existing projects by using the search bar on the Main page. Alternatively, users can navigate to the Search page and search for a project there. If the search yields any results, they will be displayed in a table under the search button. Users can click on the table rows to display additional information about the project that is selected. A list of all projects entered can be seen on the Projects page. The Time page is a placeholder for the time being and does not have any functionality other than displaying Nicholas Cage pictures. <br>
