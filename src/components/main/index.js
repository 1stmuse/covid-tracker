import React from 'react';
// import Typography from '@material-ui/core/Typography';
import DropDown from '../dropDown'
import CountryInfo from '../countryInfo'

const Main = ({summary}) => {
    // const country = ['niger', 'ghana', 'eng', 'maritus','france', 'swizz' ]
    return (
        <div>
            <DropDown  />
            <hr/>
            <CountryInfo summary={summary} />
            
        </div>
    );
};

export default Main;