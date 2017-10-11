import React from 'react'

import Header from './Header'
import Map from './Map'
import Info from './Info'

import {HashRouter as Router, Route} from 'react-router-dom'

const App = () => {
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
          <Info />
        </div>
      </div>
    </section>
  )
}

export default App
