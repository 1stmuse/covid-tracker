import React from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'

const MapContainer = (props) => {
    const {lng, lat, countryName}= props
    const mapStyles={
        width:'100%',
        height:'100%',
        position:'relative'
    }

    return (
        <Map
            google={props.google}
            zoom={2}
            style={mapStyles}
            InitialCenter={{lat:lat, lng:lng}}
        >
            <Marker label={countryName} lat={lat}  lng={lng} />
        </Map>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCfQH8ce-Tm5rwIXzD_Ce-OvQSDJ5kCjkk'
})(MapContainer)