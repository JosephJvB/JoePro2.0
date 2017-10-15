import request from 'superagent'

export function getInfo (spotName) {
  return request
    .get('/')
    .then(data => {

    })
}
