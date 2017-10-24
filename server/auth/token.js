const jwt = require('jsonwebtoken')

const {getUserByName} = require('../db')

function issue (req, res, next) {
  getUserByName(req.body.username)
    .then(user => {
      const token = createToken(user, process.env.JWT_SECRET)
      res.json({
        message: 'Authentical authenticity.',
        token
      })
    })
}

function createToken (user, secret) {
  return jwt.sign({
    id: user.id,
    username: user.username
  },
  secret,
  {
    expiresIn: '1d'
  })
}

module.exports = {
  issue,
  sign
}
