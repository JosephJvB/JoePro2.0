import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <section className="hero medium has-text-centered">
      <div id="header" className="columns">
        <div className="column is-one third">
        </div>
        <div className="column is-half">
          <a href="/"><img className="is-pulled-left image is-64x64" src="/images/skatelogo.png" /></a>
          <Link to="/"><h1 className="title is-1">Skate App: Spot-Map</h1></Link>
        </div>
        <div className="column">
          <Link to='/login'><button className="button">Login</button></Link>
        </div>
      </div>
    </section>
  )
}

export default Header
