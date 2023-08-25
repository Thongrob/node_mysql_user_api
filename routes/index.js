var express = require('express');
var router = express.Router();
const {message} = require('../controllers/message.js')
const {users} = require('../controllers/users.js')
/* GET home page. */
router.get('/', message);
router.post('/users', users)
module.exports = router;
