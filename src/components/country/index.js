import React from 'react';
import MapContainer from '../countryInfo/map'

import './count.css'

const Country = (props) => {
    return (
        <div>

            <div className='info-map'>
                <MapContainer/>
            </div>
            <div className='chart'></div>
            
        </div>
    );
};

export default Country;