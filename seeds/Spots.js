
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Spots').del()
    .then(function () {
      // Inserts seed entries
      return knex('Spots').insert([
        {spotName: 'Which spot?', address: '', terrain: '', comments: 'click a marker to choose a spot!', likes: 10, spotBanner: '', activeUsers: 0},
        {spotName: 'Waitangi Park', address: 'Chaffers Wharf', terrain: 'street, half-pipe. bowl', comments: 'Welly-central\'s main park. All features are concrete, street skaters have a few nice ledges/manny boxes and concrete kickers. Ramp skaters have a sketchy-miniramp plus a more reliable larger half-pipe. Bowl skaters can look out for a pretty serious 3-tiered, pool-bowl.', likes: 5, spotBanner: '/images/waitangibanner.jpg', activeUsers: 0},
        {spotName: 'Treetops', address: 'Off Edinburgh Tce. Behind the athletics track.', terrain: 'street, mini-ramp', comments: 'DIY park, child of Tom Cully & friends. In Newtown away from the main drag, Treetops is a park by skaters for skaters. One of the best places to spend a summer day with the crew, turn up with food and a few beers and settle in.', likes: 3, spotBanner: '/images/treetopsbanner.jpeg', activeUsers: 0},
        {spotName: 'Karori Ramps', address: 'Curtis Street, Karori', terrain: 'miniramp, vert ramp!', comments: 'Ramps. Really nice ramps. Can get busy during summer since it\'s the best ramp section in town. Friendly crowd, great place to learn some new moves.', likes: 2, spotBanner: '/images/karoribanner.jpg', activeUsers: 0},
        {spotName: 'Fusion', address: '89 Cuba Street', terrain: 'it\'s a shop', comments: 'Got a lovely pair of DC shoes here, say hi to Jack for me', likes: 1, spotBanner: '/images/fusionbanner.jpg', activeUsers: 0},
        {spotName: 'Cheapskates', address: '60 Cuba Street', terrain: 'it\'s a shop', comments: 'Nick hooked me up with some wicked Vans here, he\'s the man', likes: 1, spotBanner: '/images/cheapskatesbanner.jpg', activeUsers: 0}
      ])
    })
}
