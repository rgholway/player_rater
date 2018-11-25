import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  height: '500px',
  width: '500px',
  top: '610px',
  left: '50px',
  border: 'solid 1px'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={17}
        style={mapStyles}
        initialCenter={{
         lat: Number(this.props.latitude),
         lng: Number(this.props.long)
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDyxnHzBWgF6lrFcT79qgE7p3aqdsc87bQ&callback=initMap"
})(MapContainer);
