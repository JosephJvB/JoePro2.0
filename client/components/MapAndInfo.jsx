import React from 'react'

import Map from './Map'
import Info from './Info'

const MapAndInfo = (props) => {
  // console.log(props)
  return (
    <div className="columns">
      <Map showSpotInfo={props.showSpotInfo} spots={props.spots}/>
      <Info handleLike={props.handleLike} activeSpot={props.activeSpot}/>
    </div>

  )
}

export default MapAndInfo
