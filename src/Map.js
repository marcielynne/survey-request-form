import * as React from 'react';
import { Map } from '@esri/react-arcgis';
import AddSymbol from './AddSymbol'; 

export default class MakeAMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            map: null,
            view: null,
            lonClick: '',
            latClick: ''
        };
    }

    render() {
        return (
            <Map
            mapProperties={{basemap: 'hybrid'}} 
            viewProperties={{center: [-95, 40], zoom: 4}}
            onLoad={this.handleMapLoad}
            onClick={this.handleClick}>
                <AddSymbol 
                    lonClick={this.state.lonClick}
                    latClick={this.state.latClick}
                />
            </Map> 
        );    
    }

    handleMapLoad = (map, view) => {
        this.setState({ map, view });
    }

    handleClick = (evt) => {
        this.setState({
            lonClick: evt.mapPoint.longitude,
            latClick: evt.mapPoint.latitude
        })
    }
    
}
