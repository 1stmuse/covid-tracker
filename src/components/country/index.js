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
            <div>Nigeria Population: 20000000 </div>

            <div className='info-map'>
                <MapContainer/>
            </div>
            <div className='chart'>
                <Chart/>
            </div>

            <div>
                <div>
                    <div>Today's Statistics</div>
                    <h3>Total deaths</h3>
                    <h3>Total Confirmed</h3>
                    <h3>Total Recovered</h3>
                </div>
                <div>
                    <div>Total Statistics</div>
                    <h3>Total deaths</h3>
                    <h3>Total Confirmed</h3>
                    <h3>Total Recovered</h3>
                </div>
            </div>
            
        </div>
    );
};

export default withRouter(Country);