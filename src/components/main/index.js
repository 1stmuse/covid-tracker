import React from 'react';
import Typography from '@material-ui/core/Typography';
import DropDown from '../dropDown'
import CountryInfo from '../countryInfo'

const Main = () => {
    const country = ['niger', 'ghana', 'eng', 'maritus','france', 'swizz' ]
    return (
        <div>
            <DropDown countries={country} />
            <CountryInfo/>
            <div>
            </div>
            
        </div>
    );
};

export default Main;