import React from 'react'

class CheckinButt extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isClicked: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    console.log('iclick')
    this.props.addActiveSk8r()
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  render () {
    return (
      <div>
        {!this.state.isClicked && <button className="button is-success is-pulled-left" onClick={() => this.handleClick()}>Yo Im Here!</button>}
        {this.state.isClicked && <button className="button is-success is-pulled-left" disabled>Chur</button>}
      </div>
    )
  }
}

export default CheckinButt
