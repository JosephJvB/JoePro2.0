import React from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps' // import sub-modules from the library, not the whole thing

class Map extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      height: '500px',
      width: '100%'
    }
  }
  componentDidMount () {
    this.initMap()
  }
  initMap () {
    this.map = new google.maps.Map(this.refs.map, {
      center: {lat: -41.300000, lng: 174.772779},
      zoom: 13
    })

    const markers = [
      {lat: -41.292010, lng: 174.784688}, //waitangi
      {lat: -41.321686, lng: 174.780642}, //treetops
      {lat: -41.279619, lng: 174.754061} // karori
    ]

    markers.forEach(coords => {
      addMarker(coords)
    })

    function addMarker (coords) {
      this.marker = new google.maps.Marker({
        position: coords,
        map: this.map
      })
    }
  }
  render () {
    let { height, width } = this.state
    return (
      <div className="map" style={{width, height}} ref="map" >map go here</div>
    )
  }
}

export default Map
