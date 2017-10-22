import React from 'react'
import {connect} from 'react-redux'

import {fetchPosts} from '../actions'

const Shreddit = (props) => {
  return (
    <div>
      hey im shreddit<br/>
      sort posts by:
      <select>
        <option value="">Hot</option>
        <option value="top">Top</option>
        <option value="new">New</option>
      </select>
      <input type="submit" onClick={(e) => props.dispatch(fetchPosts(e.target.value))}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log({state})
  return {
    shredditPosts: state.shredditPosts
  }
}

export default connect(mapStateToProps)(Shreddit)
