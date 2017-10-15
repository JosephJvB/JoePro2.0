
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Spots').del()
    .then(function () {
      // Inserts seed entries
      return knex('Spots').insert([
        {id: 1, spot_name: 'Waitangi Park', address: 'Chaffers Wharf', terrain: 'street, half-pipe. bowl', comments: 'Welly-central\'s main park. All features are concrete, street skaters have a few nice ledges/manny boxes and concrete kickers. Ramp skaters have a sketchy-miniramp plus a more reliable larger half-pipe. Bowl skaters can look out for a pretty serious 3-tiered, pool-bowl.', likes: 5},
        {id: 2, spot_name: 'Treetops', address: 'Off Edinburgh Tce. Behind the athletics track.', terrain: 'street, mini-ramp', comments: 'DIY park, child of Tom Cully & friends. In Newtown away from the main drag, Treetops is a park by skaters for skaters. One of the best places to spend a summer day with the crew, turn up with food and a few beers and settle in.', likes: 3},
        {id: 3, spot_name: 'Karori Ramps', address: 'Curtis Street, Karori', terrain: 'miniramp, vert ramp!', comments: 'Ramps. Really nice ramps. Can get busy during summer since it\'s the best ramp section in town. Friendly crowd, great place to learn some new moves.', likes: 2}
      ])
    })
}
