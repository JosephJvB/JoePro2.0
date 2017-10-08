import React from 'react'

import Header from './Header'
import Map from './Map'
// import Info from './Info'

const App = () => {
  return (
    <section className="section has-text-centered">
      <Header />
      <hr />
      <div className="columns">
        <div className="column">
          <Map />
        </div>
        <div className="column">
          <h1>info</h1>
        </div>
      </div>
    </section>
  )
}

export default App
