import React from 'react';

import './country.css'
import MapContainer from './map'

const CountryInfo = ({summary, lat, lng, countryName}) => {
    const {todayDeaths, todayCases, todayRecovered}= summary[0]
    return (
        <div>
            <div className='map-div' >
                <MapContainer lat={lat} lng={lng} countryName={countryName} />
            </div>
            <hr/>
            <div>
                <div className='latest-div'>
                    <h3>Today</h3>
                    <div className='stats'>
                        <h4>{`Confirmed Cases: ${todayCases}`} </h4>
                        <h4>{`Deaths: ${todayDeaths}`}</h4>
                        <h4>{`Recovered Cases ${todayRecovered}`} </h4>
                    </div>
                </div>
                <button>More Info</button>
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