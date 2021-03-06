import React, { Component } from 'react';

class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      }
    this.initMap = this.initMap.bind(this)
  }

  componentDidMount() {
    window.initMap = this.initMap
    loadJS("https://maps.googleapis.com/maps/api/js?key=AIzaSyDyxnHzBWgF6lrFcT79qgE7p3aqdsc87bQ&callback=initMap")
  }

  initMap() {
    if (this.props.latitude) {
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: {lat: Number(this.props.latitude), lng: Number(this.props.long)}
    })
  } else {
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: {lat: 41.9028, lng: 12.4964}
    })
  }
  }

  render() {
   return(
     <div id="map" className="map__location"></div>
   )
  }
}

  export default MapContainer;

  function loadJS(src) {
    let ref = window.document.getElementsByTagName("script")[0];
    let script = window.document.createElement("script");
    script.src = src;
    script.async = false;
    script.defer = true;
    ref.parentNode.insertBefore(script, ref);
  }
