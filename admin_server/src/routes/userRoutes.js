const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

router.get('/userlist', UserController.getUserList);

module.exports = router;