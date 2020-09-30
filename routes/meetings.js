var express = require('express');
const knex = require('../database');
var router = express.Router();

router.get('/', async function(req, res, next) {
  const meetings = await knex('meetings').select('*');
  console.log('meetings: ', meetings)
  res.json({ meetings });
});

router.get('/:id', async function(req, res, next) {
    const meeting = await knex('meetings').where({ id: req.params.id }).select('*');
    const users = await knex('users').select('*');
    const rsvps = await knex('rsvps').where({ meeting_id: req.params.id }).join('users', 'users.id',  '=', 'rsvps.user_id').select('*');

    // console.log('meeting: ', meeting);
    // console.log('rsvps: ', rsvps);
  res.json({ meeting: meeting[0], users, rsvps })
});

module.exports = router;
