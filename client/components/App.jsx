import React from 'react'

import Header from './Header'
import Map from './Map'
import Info from './Info'

import { data } from '../../data.js'

import {HashRouter as Router, Route} from 'react-router-dom'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeSpot: data[0]
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

  render () {
    return (
      <section className="section has-text-centered">
        <Header />
        <div className="columns">
          <div className="column">
            <h1 className="subtitle is-3">Map:</h1>
            <hr />
            <Map showSpotInfo={this.showSpotInfo} data={data}/>
          </div>
          <div className="column">
            <h1 className="subtitle is-3">Info:</h1>
            <hr />
            <Info activeSpot={this.state.activeSpot}/>
          </div>
        </div>
      </section>
    )
  }
}

export default App
