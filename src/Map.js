import * as React from 'react';
import { Map } from '@esri/react-arcgis';
import AddSymbol from './AddSymbol'; 

export default (props) => (
    <Map mapProperties={{basemap: 'hybrid'}} viewProperties={{center: [-95, 40], zoom: 4}}>
        <AddSymbol />
    </Map>
)