import React from 'react'
// import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

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
    this.map = new window.google.maps.Map(this.refs.map, {
      center: {lat: -41.300000, lng: 174.772779},
      zoom: 13
    })

    // const markers = [
    //   {lat: -41.292010, lng: 174.784688}, // waitangi
    //   {lat: -41.321686, lng: 174.780642}, // treetops
    //   {lat: -41.279619, lng: 174.754061} // karori
    // ]

    // markers.forEach(coords => {
    //   addMarker(coords)
    // })

    // function addMarker (coords) {}

    let waitangi = new google.maps.Marker({
      position: {lat: -41.292010, lng: 174.784688},
      map: this.map
    })

    let treetops = new google.maps.Marker({
      position: {lat: -41.321686, lng: 174.780642},
      map: this.map
    })

    let kmini = new google.maps.Marker({
      position: {lat: -41.279619, lng: 174.754061},
      map: this.map
    })

    waitangi.addListener('click', () => {
      console.log('once upon a time')
    })
    treetops.addListener('click', () => {
      console.log('joe made an app')
    })
    kmini.addListener('click', () => {
      console.log('everyone died the end')
    })
  }

  render () {
    let { height, width } = this.state
    return (
      <div className="map" style={{width, height}} ref="map" >
        I am a map?
      </div>
    )
  }
}

export default Map
