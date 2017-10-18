import request from 'superagent'

const url = 'http://localhost:3000/#/'

export function getSpots (callback) {
  return request
    .get(url)
    .end((err, res) => {
      if (err) {
        console.log('Terror', err)
        callback(err)
      } else {
        console.log('This is res.body', res)
        callback(null, res.body)
      }
    })
}
