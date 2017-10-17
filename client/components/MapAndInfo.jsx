import React from 'react'

import Map from './Map'
import Info from './Info'

const MapAndInfo = (props) => {
  return (
    <div className="columns">
      <Map showSpotInfo={props.showSpotInfo} data={props.data}/>
      <Info activeSpot={props.activeSpot}/>
    </div>

  )
}

export default MapAndInfo
