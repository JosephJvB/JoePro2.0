import React from 'react'

const SinglePost = (props) => {
  const image = props.post.thumbnail === 'self' ? '/images/skatelogo.png' : props.post.thumbnail
  return (
    <div>
      <a href={props.post.url}><img height="150" width="150" src={image} /></a>
      <a href={`https://www.reddit.com${props.post.permalink}`}>{props.post.title}</a>
    </div>
  )
}

export default SinglePost
