import React from 'react'
import {connect} from 'react-redux'

import {fetchPosts} from '../actions'
import SinglePost from './SinglePost'

const Shreddit = (props) => {
  return (
    <div className="columns">
      <div className="column has-text-left">
      hey im shreddit<br/>
      sort posts by:
        <select id="sort">
          <option value="top">Top</option>
          <option value="new">New</option>
        </select>
        <input type="submit" onClick={() => props.dispatch(fetchPosts(document.getElementById('sort').value))}/>
        {props.shredditPosts.map((post, i) => <SinglePost key={i} post={post} />)}
      </div>
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
