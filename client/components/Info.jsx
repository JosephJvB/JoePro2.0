import React from 'react'
import { Link } from 'react-router-dom'

import LikeButton from './LikeButton'

const Info = (props) => {
  console.log(props)
  return (
    <div className="column">
      <h1 className="subtitle is-3">Info:</h1>
      <hr />
      <div className="box">
        <div className="columns">
          <div className="column is-1">
          </div>
          <div className="column has-text-left">
            <h3 className="subtitle is-3"><Link to={`/Spots/${props.activeSpot.spotName}`}>{props.activeSpot.spotName}</Link></h3>
            <hr />
          </div>
          <div className="column is-2">
            <LikeButton handleLike={props.handleLike} activeSpot={props.activeSpot}/>
          </div>
        </div>
        <div className="columns has-text-left">
          <div className="column is-1">
          </div>
          <div className="column">
            <h3 className="subtitle is-4"><strong>Address:</strong> {props.activeSpot.address}</h3>
            <h3 className="subtitle is-4"><strong>Terrain:</strong> {props.activeSpot.terrain}</h3>
            <div className="butts">
              <img src="https://bulma.io/images/placeholders/128x128.png"/>
              <img src="https://bulma.io/images/placeholders/128x128.png"/>
              <img src="https://bulma.io/images/placeholders/128x128.png"/>
            </div>
            <h3 className="subtitle is-4"><strong>Likes:</strong> {props.activeSpot.likes}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
