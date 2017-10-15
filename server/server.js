var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

const routes = require('./routes/routes')

var server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/', routes)

module.exports = server
