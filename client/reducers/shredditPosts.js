import {GET_POSTS, SHOW_ERROR} from '../actions'

let initialPosts = []

function shredditPosts (state = initialPosts, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.posts
    case SHOW_ERROR:
      return action.errorMessage
    default:
      return state
  }
}

export default shredditPosts
