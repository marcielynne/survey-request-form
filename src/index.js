import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Nav from './Nav';
import {Input, Search} from './Main';
import Map from './Map';


ReactDOM.render(
    <div>
        <Nav />
        <div className="overall-flex">
            <Map />
            <div className="form-flex">
                <Input />
            </div>
            <div className="search-display-flex">
                <Search />
            </div>
        </div>
    </div>, 
    document.getElementById('root')
);

