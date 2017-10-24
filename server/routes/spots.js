var express = require('express')
var router = express.Router()

const bodyParser = require('body-parser')
router.use(bodyParser.json())

var db = require('../db')

router.get('/', (req, res) => {
  db.getInfo()
    .then(data => res.json(data))
})

module.exports = router
