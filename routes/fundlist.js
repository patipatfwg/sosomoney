var express = require('express');
var router = express.Router();

const Controller = require('../controllers/fundlistController');

/* GET users listing. */
router.get('/', Controller.index);

module.exports = router;
