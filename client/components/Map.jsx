import React from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps' // import sub-modules from the library, not the whole thing

class Map extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      height: '40vh',
      width: '40vh',
      center: {
        lat: -41.300000,
        lng: 174.772779
      }
    }
  }
  componentDidMount () {
    this.initMap(this.state.center)
  }
  initMap (center) {
    this.map = new google.maps.Map(this.refs.map, {
      center,
      zoom: 13
    })

    // var markers = [
    //   {lat: -41.292010, lng: 174.784688}, //waitangi
    //   {lat: -41.321686, lng: 174.780642}, //treetops
    //   {lat: -41.279619, lng: 174.754061} // karori
    // ]

    this.marker = new google.maps.Marker({
      position: {lat: -41.292010, lng: 174.784688},
      map: this.map
    })
  }
  render () {
    let { height, width } = this.state
    return (
      <div className="map" style={{width, height}} ref="map" >map go here</div>
    )
  }
}

export default Map
