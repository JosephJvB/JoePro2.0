import request from 'superagent'

const url = 'http://localhost:3000/v1/spots'

export function getSpots (callback) {
  return request
    .get(url)
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

// export function getShredditPosts (type, callback) {
//   request
//     .get(`/api/v1/reddit/subreddit/skateboarding/${type}`)
//     .end((err, res) => {
//       if (err) {
//         callback(err)
//         console.log(err)
//       } else {
//         callback(null, res.body)
//       }
//     })
// }
