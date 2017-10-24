import {getShredditPosts} from '../api-client'

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

export function fetchPosts (type) {
  return (dispatch) => {
    getShredditPosts(type, (err, posts) => {
      if (err) {
        dispatch(showError(err.message))
      } else {
        dispatch(getPosts(posts))
      }
    })
  }
}
