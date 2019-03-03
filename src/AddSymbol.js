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
        loadModules([
            "esri/layers/GraphicsLayer",
            "esri/Graphic",
            "esri/geometry/Point",
            "esri/PopupTemplate"
          ]).then(([GraphicsLayer, Graphic, Point, PopupTemplate]) => {
      
            const markerLayer = new GraphicsLayer();

            this.props.view.on('click', function (evt) {

                const point = new Point({
                    longitude: evt.mapPoint.longitude,
                    latitude: evt.mapPoint.latitude
                });
        
                const markerSymbol = {
                    type: "simple-marker",
                    size: 10,
                    color: [128, 0, 0, 0.9],
                    outline: {
                    color: [255, 0, 0, 1],
                    width: 1
                    }
                };
        
                const pop = new PopupTemplate({
                    title: '<b>Location</b>',
                    content: 'X Lon: ' + evt.mapPoint.longitude +
                        '<br>Y Lat: ' + evt.mapPoint.latitude
                });
        
                const graphic = new Graphic({
                    geometry: point,
                    symbol: markerSymbol,
                    popupTemplate: pop
                });

                markerLayer.add(graphic);

                const projectLonInput = document.getElementById("projectLon");
                const projectLatInput = document.getElementById("projectLat");
                projectLonInput.value = evt.mapPoint.longitude.toString();
                projectLatInput.value = evt.mapPoint.latitude.toString();

            });

            this.props.view.on('click', function() {
                markerLayer.removeAll();
            }) 

            document.getElementById("btnClear").addEventListener('click', function() {
                markerLayer.removeAll();
            })

            document.getElementById("btnSubmit").addEventListener('click', function() {
                markerLayer.removeAll();
            })

            document.getElementById("resultsTable").addEventListener('click', function() {
                const lon = document.getElementById("projectLon").value;
                const lat = document.getElementById("projectLat").value;
                const point = new Point(lon, lat);
                const markerSymbol = {
                    type: "simple-marker",
                    size: 10,
                    color: [128, 0, 0, 0.9],
                    outline: {
                    color: [255, 0, 0, 1],
                    width: 1
                    }
                };

                const pop = new PopupTemplate({
                    title: '<b>Location</b>',
                    content: 'X Lon: ' + lon +
                        '<br>Y Lat: ' + lat
                });
        
                const graphic = new Graphic({
                    geometry: point,
                    symbol: markerSymbol,
                    popupTemplate: pop
                });
                
                markerLayer.removeAll();
                markerLayer.add(graphic);

                window.scrollTo(0,0);
            })
      
            this.props.map.add(markerLayer);

          }).catch((err) => console.error(err));
    }
}