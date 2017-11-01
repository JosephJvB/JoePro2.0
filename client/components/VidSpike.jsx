import React from 'react'
import YouTube from 'react-youtube'

class VidSpike extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    // binds go here
    this.onPauseVideo = this.onPauseVideo.bind(this)
    this.onReadyVideo = this.onReadyVideo.bind(this)
  }
  // handlers here

  onReadyVideo (event) {
    console.log('playing the video')
    event.target.playVideo()
  }

  onPauseVideo (event) {
    console.log('you have 5 seconds to finish the quote!')
    setTimeout(() => event.target.playVideo(), 5000)
  }

  render () {
    const opts = {
      height: '390',
      width: '640'
    }
    return (
      <div>hi im a video

        <YouTube videoId="3j3_iPskjxk" opts={opts} onPause={this.onPauseVideo} onReady={this.onReadyVideo}/>
      </div>
    )
  }
}

export default VidSpike

// YouTube.PlayerState
