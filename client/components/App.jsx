import React from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import MapAndInfo from './MapAndInfo'
import SingleSpot from './SingleSpot'

import { data } from '../../data.js'

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
        <Route exact path='/' render={() =>
          (<MapAndInfo showSpotInfo={this.showSpotInfo} data={data} activeSpot={this.state.activeSpot}/>)
        }/>
        <Route path='/Spots/:spotName' render={() => (<SingleSpot activeSpot={this.state.activeSpot}/>)}/>
      </section>
    )
  }
}

export default App
