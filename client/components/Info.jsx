import React from 'react'

const Info = (props) => {
  return (
    <div className="box is-info">
      <div className="columns">
        <div className="column is-1">
        </div>
        <div className="column has-text-left">
          <h3 className="subtitle is-3">{props.activeSpot.spotName}</h3>
          <hr />
        </div>
        <div className="column is-2">
          <button className="button is-success is-pulled-left">Like</button>
        </div>
      </div>
      <div className="columns has-text-left">
        <div className="column is-1">
        </div>
        <div className="column">
          <h3 className="subtitle is-4">Address: {props.activeSpot.address}</h3>
          <h3 className="subtitle is-4">Terrain: {props.activeSpot.terrain}</h3>
          <h3 className="subtitle is-4">Comments: {props.activeSpot.comments}</h3>
          <h3 className="subtitle is-4">Likes: {props.activeSpot.likes}</h3>
        </div>
      </div>
    </div>
  )
}

export default Info
