# Survey Request Form

This application completes the React/JS course requirements through Code Louisville for 2019.

## Installing the App

1. Run git clone https://github.com/marcielynne/survey-request-form.git
2. `cd` into the directory and run the following: <br>
    `npm install --save react-router-dom @esri/react-arcgis`<br>
    `npm start` to start the local development server
    

## App Description

The Survey Request Form was built to satisfy work order requests for survey projects. Users are required to click on the map to select a point. Once a location has been selected, the user must fill out all input fields. Users can search for existing projects by using the search bar on the Main page. Alternatively, users can navigate to the Search page and search for a project there. A list of all projects entered can be seen on the Projects page. The Time page is a placeholder for the time being and does not have any functionality other than displaying Nicholas Cage pictures. <br>

API requirements were fullfilled through the following: <br>
The asset area input pulls values from https://swapi.co/api/planets/ <br>
The vendor input pulls values from http://hp-api.herokuapp.com/api/characters <br>
The project type input pulls values from https://swapi.co/api/people/ <br>
The bill number type input pulls values from https://api.openbrewerydb.org/breweries <br>

Additionally, the app uses the React-ArcGIS library, which is a library of React components that use the ArcGIS API for JavaScript. React-ArcGIS uses esri-loader internally to load and interact with the AMD ArcGIS API for JavaScript, and provide a base for building mapping applications. More information can be found here: https://github.com/Esri/react-arcgis


