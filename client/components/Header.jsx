import React from 'react'

const Header = () => {
  return (
    <section className="hero medium has-text-centered">
      <div id="header" className="columns">
        <div className="column is-one third">
        </div>
        <div className="column is-half">
          <a href="/"><img className="is-pulled-left image is-64x64" src="/images/skatelogo.png" /></a>
          <h1 className="title is-1">Skate App: Spot-Map</h1>
        </div>
        <div className="column">
          <button className="button is-info">Login</button>
        </div>
      </div>
    </section>
  )
}

export default Header
