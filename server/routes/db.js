const path = require('path')
const config = require(path.join(__dirname, '/../../knexfile')).development
const knex = require('knex')(config)

function getSpots () {
  return knex('Spots')
    .select()
}

module.exports = {
  getSpots
}
