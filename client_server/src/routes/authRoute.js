const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')

router.post('/login', AuthController.clientLogin);
router.post('/register', AuthController.clientRegister)

module.exports = router
