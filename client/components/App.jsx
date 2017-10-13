import React from 'react'

import Header from './Header'
import Map from './Map'
import Info from './Info'

import {HashRouter as Router, Route} from 'react-router-dom'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      BUTTS
    }
    // BINDS GO HERE
  }

  // HANDLERS GO HERE

  return () {
    return (
      <section className="section has-text-centered">
        <Header />
        <div className="columns">
          <div className="column">
            <h1 className="subtitle is-3">Map:</h1>
            <hr />
            <Map/>
          </div>
          <div className="column">
            <h1 className="subtitle is-3">Info:</h1>
            <hr />
            <Info name=''/>
          </div>
        </div>
      </section>
    )
  }
}

export default App
