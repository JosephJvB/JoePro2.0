import React from 'react'

import Header from './Header'
import Map from './Map'
import Info from './Info'

import { data } from '../../data.js'

import { Route } from 'react-router-dom'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeSpot: data[0],
      isMapVisible: true,
      isInfoVisible: true,
      isSingleSpotVisible: false
    }
    // BINDS GO HERE
    this.showSpotInfo = this.showSpotInfo.bind(this)
    this.handleSpotClick = this.handleSpotClick.bind(this)
    this.handleHomeClick = this.handleHomeClick.bind(this)
  }

  // HANDLERS GO HERE
  handleSpotClick () {
    this.setState({
      isMapVisible: false,
      isInfoVisivble: false,
      isSingleSpotVisible: true
    })
  }

  handleHomeClick () {
    this.setState({
      isMapVisible: true,
      isInfoVisivble: true,
      isSingleSpotVisible: false
    })
  }

  showSpotInfo (spot) {
    this.setState({
      activeSpot: spot
    })
  }

  render () {
    return (
      <section className="section has-text-centered">
        <Header />
        <div className="columns">
          <div className="column">
            <h1 className="subtitle is-3">Map:</h1>
            <hr />
            {this.state.isMapVisible && <Map showSpotInfo={this.showSpotInfo} data={data}/>}
          </div>
          <div className="column">
            <h1 className="subtitle is-3">Info:</h1>
            <hr />
            {this.state.isInfoVisible && <Info activeSpot={this.state.activeSpot} handleSpotClick={this.handleSpotClick}/>}
          </div>
        </div>
      </section>
    )
  }
}

export default App
