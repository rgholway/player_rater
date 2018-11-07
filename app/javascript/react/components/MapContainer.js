import React from 'react'
const google = window.google;

const MapContainer = props => {
  let map = new google.maps.Map(document.getElementById('map'), {
     zoom: 16,
     center: {lat: Number(props.latitude), lng: Number(props.long)}
   })
   return(
     <div className="map__location"> </div>
   )
  }

  export default MapContainer;

  function loadJS(src) {
    let ref = window.document.getElementsByTagName("script")[0];
    let script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
  }
