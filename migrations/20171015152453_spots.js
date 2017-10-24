exports.up = function (knex, Promise) {
  return knex.schema.createTable('spots', (table) => {
    table.increments().primary()
    table.string('spotName')
    table.string('address')
    table.string('terrain')
    table.string('comments')
    table.integer('likes')
    table.string('spotBanner')
    table.string('activeUsers')
    table.string('instaVid1')
    table.string('instaVid2')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('spots')
}
