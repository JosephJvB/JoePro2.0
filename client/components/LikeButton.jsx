import React from 'react'

class LikeButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      likedSpots: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    console.log('iclick')
    this.props.handleLike(this.props.activeSpot)
    let likedSpots = this.state.likedSpots
    likedSpots.push(this.props.activeSpot)
    this.setState({
      likedSpots
    })
  }

  render () {
    return (
      <div>
        {this.state.likedSpots.find(spot => spot == this.props.activeSpot)
          ? <button className="button is-success is-pulled-left" disabled>:)</button>
          : <button className="button is-success is-pulled-left" onClick={() => this.handleClick()}>Like</button>
          }
      </div>
    )
  }
}

export default LikeButton
