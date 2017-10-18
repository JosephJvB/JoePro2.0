import React from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import MapAndInfo from './MapAndInfo'
import SingleSpot from './SingleSpot'
import Login from './Login'

import { data } from '../../data.js'
// import {getInfo} from '../api-client'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      activeSpot: data[0],
      likes: data[0].likes,
      activeUsers: data[0].activeUsers
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

  // componentDidMount () {
  //   this.getInfo(this.renderMyButteredBuns.bind(this))
  // }

  // renderMyButteredBuns (err, spots) {
  //   this.setState({
  //     error: err,
  //     spots: spots
  //   })
  // }

  render () {
    return (
      <section className="section has-text-centered">
        <Header />
        <Route exact path='/' render={() =>
          (<MapAndInfo handleLike={this.handleLike} showSpotInfo={this.showSpotInfo} data={data} activeSpot={this.state.activeSpot}/>)
        }/>
        <Route path='/Spots/:spotName' render={() => (<SingleSpot addActiveSk8r={this.addActiveSk8r} activeSpot={this.state.activeSpot}/>)}/>
        <Route path='/login' component={Login}/>
      </section>
    )
  }
}

export default App
