import React from 'react'

class Info extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      likes: props.activeSpot.likes
    }
    // binds go here
    this.handleLike = this.handleLike.bind(this)
  }

  handleLike () {
    this.setState({
    })
  }

  render () {
    return (
      <div className="box is-info">
        <div className="columns">
          <div className="column is-1">
          </div>
          <div className="column has-text-left">
            <h3 className="subtitle is-3">{this.props.activeSpot.spotName}</h3>
            <hr />
          </div>
          <div className="column is-2">
            <button className="button is-success is-pulled-left" onClick={() => this.handleLike()}>Like</button>
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
    )
  }
}

export default Info
