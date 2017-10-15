const path = require('path')
const config = require(path.join(__dirname, '/../../knexfile')).development
const knex = require('knex')(config)

function getInfo () {
  return knex('Spots')
    .select()
}

module.exports = {
  getInfo
}
