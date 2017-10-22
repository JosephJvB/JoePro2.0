import request from 'superagent'

// import {getShredditPosts} from '../api-client'

export const GET_POSTS = 'GET_POSTS'
export const SHOW_ERROR = 'SHOW_ERROR'

export const getPosts = (posts) => {
  return {
    type: GET_POSTS,
    posts: posts.map(post => post.data)
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage
  }
}

// id like it if you could choose whether you wanted the top posts or hot posts or new posts from my site rather than from reddit.

export function fetchPosts (type) {
  return (dispatch) => {
    request
      .get(`/api/v1/reddit/subreddit/skateboarding/${type}`)
      .end((err, res) => {
        if (err) {
          dispatch(showError(err.message))
        } else {
          dispatch(getPosts(res.body))
        }
      })
  }
}
