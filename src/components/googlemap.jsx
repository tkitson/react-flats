import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

const defaultProps = {
  center: {
    lat: 48.85477,
    lng: 2.29451
  },
  zoom: 9.5
};


class SimpleMap extends Component {

  render() {
    const center = {
      lat: this.props.lat,
      lng: this.props.lng
    }
    return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      <Marker
          lat={center.lat}
          lng={center.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
}
export default SimpleMap;
