import React from 'react'

const Header = () => {
  return (
    <section className="hero is-primary medium has-text-centered">
      <div id="header" className="columns">
        <div className="column is-one quarter">
        </div>
        <div className="column is-half">
          <h1 className="title is-1">Skate App: Spot-Map</h1>
        </div>
        <div className="column">
          <a href="/"><img className="image is-128x128" src="/images/skatelogo.png" /></a>
        </div>
      </div>
    </section>
  )
}

export default Header
