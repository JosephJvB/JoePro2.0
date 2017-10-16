import React from 'react'

const SingleSpot = (props) => {
  return (
    <div className="container">
      <hr />
      <div className="columns">
        <div className="column is-2 has-text-left">
          <p>Check in to let the homies know you're here</p>
          <button className="button is-success">Yo, I'm here!</button>
        </div>
        <div className="column has-text-left">
          <h1 className="subtitle is-1">{props.activeSpot.spotName}</h1>
          <img src={props.activeSpot.spotBanner}/>
        </div>
      </div>
      <div className="columns">
        <div className="column is-1">
        </div>
        <div className="column has-text-left">
     want to show pics and gifs and stats and things and stuff and wow look at this website! *applause*
          <a href='/'><button className='button is-danger'>snap back to reality</button></a>
        </div>
      </div>
    </div>
  )
}

export default SingleSpot
