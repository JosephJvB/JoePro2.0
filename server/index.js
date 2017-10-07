var server = require('./server')

var PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('Im afraid I cant do that Joe', PORT)
})
