
exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'skye-and-ground', hash: ''},
        {id: 2, username: 'cullen', hash: ''},
        {id: 3, username: 'dazdon', hash: ''}
      ])
    })
}
