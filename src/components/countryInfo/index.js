import React from 'react';

import './country.css'
import MapContainer from './map'

const CountryInfo = ({summary}) => {
    const {NewDeaths, NewConfirmed, NewRecovered}= summary[0]
    return (
        <div>
            <div className='map-div' >
                <MapContainer/>
            </div>
            <hr/>
            <div>
                <div className='latest-div'>
                    <h3>Latest</h3>
                    <div className='stats'>
                        <h4>{`Confirmed Cases: ${NewConfirmed}`} </h4>
                        <h4>{`Deaths: ${NewDeaths}`}</h4>
                        <h4>{`Recovered Cases ${NewRecovered}`} </h4>
                    </div>
                </div>
                {/* <hr/>
                <div>
                    <h3>Total</h3>
                    <div>
                        <h4>Deaths</h4>
                        <h4>Confirmed</h4>
                        <h4>Recovered</h4>
                        <h4>Active Cases</h4>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default CountryInfo;