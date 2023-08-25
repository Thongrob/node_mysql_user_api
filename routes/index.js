var express = require('express');
var router = express.Router();
const {message} = require('../controllers/message.js')
/* GET home page. */
router.get('/', message);

module.exports = router;
