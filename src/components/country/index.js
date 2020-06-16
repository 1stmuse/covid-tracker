import React from 'react';
import {withRouter} from 'react-router-dom'
import  Chart from './chart/index'
import MapContainer from '../countryInfo/map'

import './count.css'

const Country = (props) => {
    const data = props.history.location.pathname.split('/')[2]
    console.log(data)
    return (
        <div>

            <div className='info-map'>
                <MapContainer/>
            </div>
            <div className='chart'>
                <Chart/>
            </div>
            
        </div>
    );
};

export default withRouter(Country);