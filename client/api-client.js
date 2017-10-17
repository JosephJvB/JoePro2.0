import request from 'superagent'

const url = 'http://localhost:3000/#/'

export function getInfo (callback) {
  return request
    .get(url)
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        console.log('This is res.body', res.body)
        callback(null, res.body)
      }
    })
}
