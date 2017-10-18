import React from 'react'

const SingleSpot = (props) => {
  return (
    <div className="container">
      <hr />
      <div className="columns">
        <div className="column is-2 has-text-left">
          <p>Check in to let the homies know you're here</p>
          <hr />
          <button id="butt" onClick={() => props.addActiveSk8r(props.activeSpot)} className="button is-success">Yo, I'm here!</button>
          <hr />
          <p className="subtitle is-4">Active Sk8rs:</p>
          <p>{props.activeSpot.activeUsers}</p>
          <hr />
        </div>
        <div className="column has-text-left">
          <h1 className="subtitle is-1">{props.activeSpot.spotName}</h1>
          <img src={props.activeSpot.spotBanner}/>
        </div>
      </div>
      <div className="columns">
        <div className="column is-2">
        </div>
        <div className="column has-text-left">
          sup
        </div>
      </div>
    </div>
  )
}

export default SingleSpot
