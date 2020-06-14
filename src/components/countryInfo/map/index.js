import React from 'react';
// import GoogleMapsStyles from './GoogleMapsStyles'

import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'

const MapContainer = (props) => {

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
            initialCenter={{lat:47.44, lng:-122.176}}
        >
            <Marker label='nigeria' lat={47.44}  lng={-122.176} />
        </Map>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCfQH8ce-Tm5rwIXzD_Ce-OvQSDJ5kCjkk'
})(MapContainer)