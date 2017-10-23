import React from 'react'

const SinglePost = (props) => {
  return (
    <div>
      <img src={props.post.thumbnail} />
      {props.post.title}
      {props.post.selftext}
    </div>
  )
}

export default SinglePost
