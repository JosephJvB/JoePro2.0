const {generate} = require('./auth/hash')

const path = require('path')
const config = require(path.join(__dirname, '/../knexfile')).development
const knex = require('knex')(config)

function getInfo () {
  return knex('Spots')
    .select()
}

function userExists (username) {
  return getUserByName(username)
    .then(user => !!user)
}

function createUser (username, password) {
  const hash = generate(password)
  return knex('users')
    .insert({
      username,
      hash
    })
}

function getUserByName (username) {
  return knex('users')
    .where('username', username)
    .first()
}

module.exports = {
  getInfo,
  userExists,
  createUser,
  getUserByName
}
