import React from 'react';
import DropDown from '../dropDown'
import CountryInfo from '../countryInfo'

const Main = ({summary, lat, lng, countryName}) => {
    return (
        <div>
            <DropDown  />
            <hr/>
            <CountryInfo 
                summary={summary} 
                lat ={lat}
                lng={lng}
                countryName={countryName}
            />
            
        </div>
    );
};

export default Main;