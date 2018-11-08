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
    console.log(this.props.latitude)
    console.log(this.props.long)
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: {lat: Number(this.props.latitude), lng: Number(this.props.long)}
    })
  }

  render() {
   return(
     <div id="map" style={{height: '500px', width: '500px', top: '610px', left: '50px', border: 'solid 1px black'}}></div>
   )
  }
}

  export default MapContainer;

  function loadJS(src) {
    let ref = window.document.getElementsByTagName("script")[0];
    let script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
  }
