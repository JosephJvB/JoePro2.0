import React from 'react'
// import {match} from 'react-router-dom'

// const SingleSpot = ({match}) => {
const SingleSpot = (props) => {
  return (
    <div>
      {/* you are at {match.params.spotName} */}
      <h1>{props.activeSpot.spotName}</h1>
     want to show pics and gifs and stats and things and stuff and wow look at this website! *applause*
      <a href='/'><button className='button is-danger'>snap back to reality</button></a>
    </div>
  )
}

export default SingleSpot
