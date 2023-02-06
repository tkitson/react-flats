import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627
  },
  zoom: 11
};


class SimpleMap extends Component {

  render() {
    const center = {
      lat: this.props.lat,
      lng: this.props.long
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
          center={center}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
}
export default SimpleMap;
