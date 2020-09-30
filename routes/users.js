var express = require('express');
const knex = require('../database');
var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const users = await knex('users').select('*');
  return res.json({ users });
});

module.exports = router;
