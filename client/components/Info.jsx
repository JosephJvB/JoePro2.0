import React from 'react'

// info has to take in props so I can give it the info it needs to print on screen. And because those props are likely coming from map do I need to render info within my map component?

const Info = (props) => {
  return (
    <div className="box is-info">
      <div className="columns">
        <div className="column is-1">
        </div>
        <div className="column has-text-left">
          <h3 className="subtitle is-3">{props.name}</h3>
        </div>
      </div>
      <div className="columns">
        <div className="column is-2">
        </div>
        <div className="column has-text-left">
          <h3 className="subtitle is-4">im</h3>
          <h3 className="subtitle is-4">joe</h3>
          <h3 className="subtitle is-4">and</h3>
          <h3 className="subtitle is-4">i</h3>
          <h3 className="subtitle is-4">want</h3>
          <h3 className="subtitle is-4">you</h3>
          <h3 className="subtitle is-4">to</h3>
          <h3 className="subtitle is-4">know</h3>
        </div>
      </div>
    </div>
  )
}

export default Info
