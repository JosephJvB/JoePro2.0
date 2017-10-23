var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

const spotRoutes = require('./routes/spots')
const redditRoutes = require('./routes/redditRoutes')

var server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/v1/spots', spotRoutes)
server.use('/api/v1/reddit/subreddit', redditRoutes)

module.exports = server
