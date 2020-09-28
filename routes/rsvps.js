var express = require('express');
var router = express.Router();
const knex = require('../database');

/* GET users listing. */
router.post('/', async function(req, res, next) {    
    console.log(req.body);
    const rsvps = await knex('rsvps').where({ meeting_id: req.body.meeting_id, user_id: req.body.user_id }).select('*');
    if (rsvps[0]) {
        await knex('rsvps').update({ status: req.body.status }).where({ meeting_id: req.body.meeting_id, user_id: req.body.user_id });
    } else {
        await knex('rsvps').insert([{ meeting_id: req.body.meeting_id, user_id: req.body.user_id, status: req.body.status }]);
    }
    res.send(200);
});


module.exports = router;
