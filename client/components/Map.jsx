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
      zoom: 13
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

    // i need these to print text to the info window

    waitangi.addListener('click', () => {
      console.log('once upon a time')
      this.state.showSpotInfo(this.state.data[1])
    })
    treetops.addListener('click', () => {
      console.log('joe made an app')
      this.state.showSpotInfo(this.state.data[2])
    })
    kmini.addListener('click', () => {
      console.log('everyone died the end')
      this.state.showSpotInfo(this.state.data[3])
    })
    fusion.addListener('click', () => {
      console.log('im a sellout')
      this.state.showSpotInfo(this.state.data[0])
    })
    cheapskates.addListener('click', () => {
      console.log('give me $$')
      this.state.showSpotInfo(this.state.data[0])
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
