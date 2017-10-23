import React from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import Map from './Map'
import Info from './Info'
import SingleSpot from './SingleSpot'
import Login from './Login'
import Shreddit from './Shreddit'

import {getSpots} from '../api-client'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      spots: [],
      activeSpot: {},
      likes: 0,
      activeUsers: 0
    }
    // BINDS GO HERE
    this.showSpotInfo = this.showSpotInfo.bind(this)
    this.handleLike = this.handleLike.bind(this)
    this.addActiveSk8r = this.addActiveSk8r.bind(this)
  }

  // HANDLERS GO HERE
  showSpotInfo (spot) {
    this.setState({
      activeSpot: spot,
      likes: spot.likes,
      activeUsers: spot.activeUsers
    })
  }

  handleLike (spot) {
    this.setState({
      likes: this.state.activeSpot.likes++
    })
  }

  addActiveSk8r () {
    this.setState({
      activeUsers: this.state.activeSpot.activeUsers++
    })
  }

  componentDidMount () {
    getSpots(this.renderSpots.bind(this))
  }

  renderSpots (err, spots) {
    this.setState({
      error: err,
      spots: spots,
      activeSpot: spots[0],
      likes: spots[0].likes,
      activeUsers: spots[0].activeUsers
    })
  }

  render () {
    return (
      <section className="section has-text-centered">
        <Header />
        <div className="columns">
          <Route exact path='/' render={() =>
            (<Map showSpotInfo={this.showSpotInfo} spots={this.state.spots}/>)
          }/>
          <Route exact path='/' render={() =>
            (<Info handleLike={this.handleLike} activeSpot={this.state.activeSpot}/>)
          }/>
        </div>
        <Route path='/Spots/:spotName' render={() => (<SingleSpot addActiveSk8r={this.addActiveSk8r} activeSpot={this.state.activeSpot}/>)}/>
        <Route path='/login' component={Login}/>
        <Route path='/shreddit' component={Shreddit} />
      </section>
    )
  }
}

export default App
