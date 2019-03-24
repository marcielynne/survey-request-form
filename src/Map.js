import * as React from 'react';
import { Map } from '@esri/react-arcgis';
import AddSymbol from './AddSymbol'; 

// Map component that utilizes @esri/react-arcgis. map, view, lonClick, and latClick are being stored in state, but are not being used anywhere else. Future development will use these in the AddSymbol component.
export default class MakeAMap extends React.Component {
    constructor(props) {
        super(props);
        // Set the state for map, view, lonClick, and latClick
        this.state = {
            map: null,
            view: null,
            lonClick: '',
            latClick: ''
        };
    }

    render() {
        return (
            // Set the properties of the map to be hybrid, centered, and zoomed at 4.
            <Map
            mapProperties={{basemap: 'hybrid'}} 
            viewProperties={{center: [-95, 40], zoom: 4}}
            onLoad={this.handleMapLoad}
            onClick={this.handleClick}>
                {/* While lonClick and latClick are being passed to AddSymbol, they are not being used in AddSymbol. This will be future development. */}
                <AddSymbol 
                    lonClick={this.state.lonClick}
                    latClick={this.state.latClick}
                />
            </Map> 
        );    
    }

    // Set the state of map and view on load
    handleMapLoad = (map, view) => {
        this.setState({ map, view });
    }

    // Set the state of lonClick and latClick to be the evt.mapPoints based on where a user clicks.
    handleClick = (evt) => {
        this.setState({
            lonClick: evt.mapPoint.longitude,
            latClick: evt.mapPoint.latitude
        })
    }
    
}
