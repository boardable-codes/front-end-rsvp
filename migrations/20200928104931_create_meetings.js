
exports.up = function(knex) {
    return knex.schema.createTable('meetings', function(table) {
        table.increments('id');
        table.string('title');
        table.text('description');
        table.string('location');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('meetings');
};
