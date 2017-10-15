
exports.up = function (knex, Promise) {
  return knex.schema.createTable('Spots', (table) => {
    table.increments().primary()
    table.string('spot_name')
    table.string('address')
    table.string('terrain')
    table.string('comments')
    table.integer('likes')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('Spots')
}
