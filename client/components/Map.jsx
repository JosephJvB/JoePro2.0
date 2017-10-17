import React from 'react'
// import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

class Map extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      height: '500px',
      width: '100%',
      data: props.data,
      showSpotInfo: props.showSpotInfo
    }
  }

  componentDidMount () {
    this.initMap()
  }
  initMap () {
    this.map = new window.google.maps.Map(this.refs.map, {
      center: {lat: -41.300000, lng: 174.772779},
      zoom: 13,
      fullscreenControl: false
    })

    const waitangi = new google.maps.Marker({
      position: {lat: -41.292010, lng: 174.784688},
      map: this.map,
      title: 'Waitangi Park',
      icon: '/images/green-dot.png'
    })

    const treetops = new google.maps.Marker({
      position: {lat: -41.321686, lng: 174.780642},
      map: this.map,
      title: 'Treetops',
      icon: '/images/green-dot.png'
    })

    const kmini = new google.maps.Marker({
      position: {lat: -41.279619, lng: 174.754061},
      map: this.map,
      title: 'Karori Ramps',
      icon: '/images/green-dot.png'
    })

    const fusion = new google.maps.Marker({
      position: {lat: -41.2920394, lng: 174.7765633},
      map: this.map,
      title: 'Fusion',
      icon: '/images/white-dot.png'
    })

    const cheapskates = new google.maps.Marker({
      position: {lat: -41.290902, lng: 174.776947},
      map: this.map,
      title: 'Cheapskates',
      icon: '/images/white-dot.png'
    })

    waitangi.addListener('click', () => {
      console.log('once upon a time')
      this.map.setZoom(15)
      this.map.setCenter(waitangi.position)
      this.state.showSpotInfo(this.state.data[1])
    })
    treetops.addListener('click', () => {
      console.log('joe made an app')
      this.map.setZoom(15)
      this.map.setCenter(treetops.position)
      this.state.showSpotInfo(this.state.data[2])
    })
    kmini.addListener('click', () => {
      console.log('everyone died the end')
      this.map.setZoom(15)
      this.map.setCenter(kmini.position)
      this.state.showSpotInfo(this.state.data[3])
    })
    fusion.addListener('click', () => {
      console.log('im a sellout')
      this.map.setZoom(15)
      this.map.setCenter(fusion.position)
      this.state.showSpotInfo(this.state.data[4])
    })
    cheapskates.addListener('click', () => {
      console.log('give me $$')
      this.map.setZoom(15)
      this.map.setCenter(fusion.position)
      this.state.showSpotInfo(this.state.data[5])
    })
  }

  render () {
    let { height, width } = this.state
    return (
      <div className="column">
        <h1 className="subtitle is-3">Map:</h1>
        <hr />
        <div className="map" style={{width, height}} ref="map" >
        I am a map?
        </div>
      </div>
    )
  }
}

export default Map
