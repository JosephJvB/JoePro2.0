import React from 'react'
import YouTube from 'react-youtube'

class VidSpike extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      video: null,
      startTime: 99,
      quoteStart: 129,
      quoteEnd: 132,
      pauseTime: 5
    }
    // binds go here
    this.startClip = this.startClip.bind(this)
    this.muteClip = this.muteClip.bind(this)
    this.pauseClip = this.pauseClip.bind(this)
    this.restartClip = this.restartClip.bind(this)
    this.endVideo = this.endVideo.bind(this)
  }
  // handlers here
  startClip (event) {
    console.log(event)
    console.log('vid playing')
    this.setState({
      video: event.target
    })
    event.target.seekTo(this.state.startTime)
    event.target.playVideo()
    setTimeout(() => this.muteClip(), (this.state.quoteStart - this.state.startTime) * 1000)
  }

  muteClip () {
    console.log('be quiet')
    this.state.video.mute()
    setTimeout(() => this.pauseClip(), (this.state.quoteEnd - this.state.quoteStart) * 1000)
  }
  pauseClip () {
    console.log('let them speak')
    this.state.video.pauseVideo()
    setTimeout(() => this.restartClip(), this.state.pauseTime * 1000)
  }
  restartClip () {
    console.log('do-over!')
    this.state.video.seekTo(this.state.quoteStart)
    this.state.video.unMute()
    setTimeout(() => this.endVideo(), 500)
  }
  endVideo () {
    console.log('oooh thats what you said')
    this.state.video.playVideo()
    setTimeout(() => this.state.video.pauseVideo(), (this.state.quoteEnd - this.state.quoteStart) * 1000)
  }

  render () {
    const opts = {
      height: '390',
      width: '640'
    }
    return (
      <div>

        <YouTube videoId="TU7CDejp6Lw" opts={opts} onReady={this.startClip}/>

        <button>probably need a continue button, visible after, to go to leaderboard or next player</button>
      </div>
    )
  }
}

export default VidSpike

// pseudocode time, I want the video to play for ~30 seconds, I want the video to pause for ~15 seconds for the player to finish the quote. I want the video to resume and finish the quote

// YouTube.PlayerState
