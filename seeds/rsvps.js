exports.seed = function(knex) {
  return knex('rsvps').del();
};
