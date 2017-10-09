import React from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps' // import sub-modules from the library, not the whole thing

const MapStateless = () => {
  
  function initMap () {
    var options = {
      zoom: 13,
      center: {
        lat: -41.300000,
        lng: 174.772779
      }
    }
    var map = new google.maps.Map(document.getElementById('map'), options)

    // Marker-Array
    var markers = [
      {lat: -41.292010, lng: 174.784688}, // waitangi
      {lat: -41.321686, lng: 174.780642}, // treetops
      {lat: -41.279619, lng: 174.754061} // karori
    ]
    markers.forEach(coords => {
      addMarker(coords)
    })
    // addMarker function
    function addMarker (coords) {
      var marker = new google.maps.Marker({
        position: coords,
        map: map
      })
    }
  }

  return (
    <div id='map'>
    </div>
  )
}

export default MapStateless
