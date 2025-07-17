const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/AuthController');
const UploadProfileImage = require('../middleware/uploadProfilePhoto');

router.post('/login', AuthController.clientLogin);
router.post('/register', AuthController.clientRegister);
router.post('/chkauth', AuthController.clientAuth);
router.patch('/editprofile', UploadProfileImage.single('userPhoto'), AuthController.clientUpdateProfile);

module.exports = router;
