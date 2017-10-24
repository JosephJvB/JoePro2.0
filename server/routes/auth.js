var express = require('express')
var router = express.Router()

const bodyParser = require('body-parser')
router.use(bodyParser.json())

var {userExists, createUser} = require('../db')

router.post('/register', register)

function register (req, res, next) {
  const {username, password} = req.body
  userExists(username)
    .then(exists => {
      if (exists) {
        return res.status(400).send('Such a lack of imagination')
      }
      createUser(username, password)
        .then(() => {
          res.status(201).send('Welcome to Welly\'s skaters, don\'t push mongo')
        })
        .catch(() => {
          return res.status(500).send('upto G?')
        })
    })
}

module.exports = router
