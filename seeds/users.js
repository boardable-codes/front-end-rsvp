const faker = require('faker');

exports.seed = function(knex) {
  return knex('users').del().then(async () => {
        const users = [];
        for (let i = 0; i < 50; i++) {
            users.push({
                name: faker.name.findName(),
                email: faker.internet.email(),
                title: faker.name.jobTitle()
            })
        }

        await knex('users').insert(users);
  })
};
