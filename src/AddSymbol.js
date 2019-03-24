// Component for adding a symol to the map each time a user clicks on the map. Uses modules from @esri/react-arcgis.
import * as React from 'react';
import { loadModules } from '@esri/react-arcgis';

export default class AddSymbol extends React.Component {
    
    render() {        
        return null;
    }

    componentWillMount() {
        this.viewPoint();
    }

    viewPoint() {
        // Load GraphicsLayer, Graphic, Point, and PopupTemplate modules
        loadModules([
            "esri/layers/GraphicsLayer",
            "esri/Graphic",
            "esri/geometry/Point",
            "esri/PopupTemplate"
          ]).then(([GraphicsLayer, Graphic, Point, PopupTemplate]) => {
      
            const markerLayer = new GraphicsLayer();

            // Store latitude and longitude based on user click
            this.props.view.on('click', function (evt) {
                const point = new Point({
                    longitude: evt.mapPoint.longitude,
                    latitude: evt.mapPoint.latitude
                });
        
                // Create marker to use when user clicks on map
                const markerSymbol = {
                    type: "simple-marker",
                    size: 10,
                    color: [128, 0, 0, 0.9],
                    outline: {
                    color: [255, 0, 0, 1],
                    width: 1
                    }
                };
        
                // Display latitude and longitude when user clicks on point
                const pop = new PopupTemplate({
                    title: '<b>Location</b>',
                    content: 'X Lon: ' + evt.mapPoint.longitude +
                        '<br>Y Lat: ' + evt.mapPoint.latitude
                });
        
                // Call the previously created constants for the graphic
                const graphic = new Graphic({
                    geometry: point,
                    symbol: markerSymbol,
                    popupTemplate: pop
                });

                markerLayer.add(graphic);

                // Display lat and lon in the input fields based on where the user clicks on the map
                const projectLonInput = document.getElementById("projectLon");
                const projectLatInput = document.getElementById("projectLat");
                projectLonInput.value = evt.mapPoint.longitude.toString();
                projectLatInput.value = evt.mapPoint.latitude.toString();

            });

            // Remove previously added markers for each user click on map
            this.props.view.on('click', function() {
                markerLayer.removeAll();
            }) 

            // Remove the graphic when the project is submitted 
            document.getElementById("btnSubmit").addEventListener('click', function() {
                markerLayer.removeAll();
            })

            this.props.map.add(markerLayer);

          }).catch((err) => console.error(err));
    }
}