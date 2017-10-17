import React from 'react'
import { Link } from 'react-router-dom'

class Info extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      likes: this.props.activeSpot.likes
    }
    // binds go here
    this.handleLike = this.handleLike.bind(this)
  }

  // idk how to make likes count I know it is a problem with the way ive created a piece of state
  handleLike (spot) {
    this.setState({
      likes: this.state.likes++
    })
  }

  render () {
    return (
      <div className="column">
        <h1 className="subtitle is-3">Info:</h1>
        <hr />
        <div className="box">
          <div className="columns">
            <div className="column is-1">
            </div>
            <div className="column has-text-left">
              <h3 className="subtitle is-3"><Link to={`/Spots/${this.props.activeSpot.spotName}`}>{this.props.activeSpot.spotName}</Link></h3>
              <hr />
            </div>
            <div className="column is-2">
              <button className="button is-success is-pulled-left" onClick={() => this.handleLike(this.props.activeSpot)}>Like</button>
            </div>
          </div>
          <div className="columns has-text-left">
            <div className="column is-1">
            </div>
            <div className="column">
              <h3 className="subtitle is-4"><strong>Address:</strong> {this.props.activeSpot.address}</h3>
              <h3 className="subtitle is-4"><strong>Terrain:</strong> {this.props.activeSpot.terrain}</h3>
              <h3 className="subtitle is-4"><strong>Comments:</strong> {this.props.activeSpot.comments}</h3>
              <h3 className="subtitle is-4"><strong>Likes:</strong> {this.props.activeSpot.likes}</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Info
