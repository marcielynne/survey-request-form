import React from 'react';
import './css/index.css';
import EsriLoaderReact from 'esri-loader-react';

class App extends React.PureComponent {

  render() {
    const options = {
      url: 'https://js.arcgis.com/4.6/'
    };
 
    return (
      <EsriLoaderReact 
        options={options} 
        modulesToLoad={[
          'esri/Map', 
          'esri/views/MapView',
          'esri/Graphic',
          'esri/symbols/SimpleMarkerSymbol',
          'esri/symbols/SimpleLineSymbol',
          'esri/Color',
          'esri/geometry/support/webMercatorUtils',
          'esri/geometry/Point'
        ]}    
        
        onReady={({loadedModules: [Map, MapView, SimpleMarkerSymbol, SimpleLineSymbol, Color, webMercatorUtils, Point]}) => {
          new MapView({
            container: 'mapDiv',
            center: [-95, 40],
            zoom: 4,
            map: new Map({
              basemap: 'hybrid'
            })
          });
        }}
      />
    );
  }
}

export default App;

