import React from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import MapAndInfo from './MapAndInfo'
import SingleSpot from './SingleSpot'

// import { data } from '../../data.js'
import {getSpots} from '../api-client'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      spots: [],
      activeSpot: {}
    }
    // BINDS GO HERE
    this.showSpotInfo = this.showSpotInfo.bind(this)
  }

  // HANDLERS GO HERE
  showSpotInfo (spot) {
    this.setState({
      activeSpot: spot
    })
  }

  componentDidMount () {
    getSpots(this.renderSpots.bind(this))
  }

  renderSpots (err, spots) {
    this.setState({
      error: err,
      spots: spots || []
    })
  }

  render () {
    return (
      <section className="section has-text-centered">
        <Header />
        <Route exact path='/' render={() =>
          (<MapAndInfo showSpotInfo={this.showSpotInfo} spots={this.spots} activeSpot={this.state.activeSpot}/>)
        }/>
        <Route path='/Spots/:spotName' render={() => (<SingleSpot activeSpot={this.state.activeSpot}/>)}/>
      </section>
    )
  }
}

export default App
