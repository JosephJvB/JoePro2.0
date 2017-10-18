import request from 'superagent'

const url = 'http://localhost:3000/#/'

export function getSpots () {
  return request
    .get(url)
    .then(res => {
      console.log(res.body, 'you suck')
      return res.body
    })
    .catch(err => {
      throw Error('you suck')
    })
}
