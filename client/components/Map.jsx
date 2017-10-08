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
    this.loadMap(this.state.center)
  }
  loadMap (center) {
    this.map = new google.maps.Map(this.refs.map, {
      center,
      zoom: 17
    })
    this.marker = new google.maps.Marker({
      position: center,
      map: this.map
    })
  }
  render () {
    let { height, width } = this.state
    return (
      <div className="map" style={{width, height}} ref="map" >I should be a map!</div>
    )
  }
}

export default Map
