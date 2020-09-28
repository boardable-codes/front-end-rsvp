
exports.up = function(knex) {
    return knex.schema.createTable('rsvps', function(table) {
        table.increments('id');
        table.integer('user_id');
        table.integer('meeting_id');
        table.string('status');
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('rsvps');
};
