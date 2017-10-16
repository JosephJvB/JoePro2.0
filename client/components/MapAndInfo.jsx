import React from 'react'

import Map from './Map'
import Info from './Info'

const MapAndInfo = (props) => {
  return (

    <div className="columns">
      <div className="column">
        <h1 className="subtitle is-3">Map:</h1>
        <hr />
        <Map showSpotInfo={props.showSpotInfo} data={props.data}/>
      </div>
      <div className="column">
        <h1 className="subtitle is-3">Info:</h1>
        <hr />
        <Info activeSpot={props.activeSpot}/>
      </div>
    </div>

  )
}

export default MapAndInfo
