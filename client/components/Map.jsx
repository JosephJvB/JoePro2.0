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

    const waitangi = new google.maps.Marker({
      position: {lat: -41.292010, lng: 174.784688},
      map: this.map,
      title: 'Waitangi Park'
    })

    const treetops = new google.maps.Marker({
      position: {lat: -41.321686, lng: 174.780642},
      map: this.map,
      title: 'Treetops'
    })

    const kmini = new google.maps.Marker({
      position: {lat: -41.279619, lng: 174.754061},
      map: this.map,
      title: 'Karori Ramps'
    })

    // i need these to print text to the info window

    waitangi.addListener('click', () => {
      console.log('once upon a time')
      this.markerClick()
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
