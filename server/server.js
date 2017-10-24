var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

const spotRoutes = require('./routes/spots')
const redditRoutes = require('./routes/redditRoutes')
const auth = require('./routes/auth')

// const {spotRoutes, redditRoutes, auth} = require('./routes')

var server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/spots', spotRoutes)
server.use('/api/v1/reddit/subreddit', redditRoutes)
server.use('/api/v1/auth', auth)

module.exports = server
