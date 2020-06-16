import React from 'react';
// import Typography from '@material-ui/core/Typography';
import DropDown from '../dropDown'
import CountryInfo from '../countryInfo'

const Main = ({summary, lat, lng, countryName}) => {
    // const country = ['niger', 'ghana', 'eng', 'maritus','france', 'swizz' ]
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