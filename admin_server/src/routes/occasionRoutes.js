const express = require('express')
const router = express.Router()
const OccasionController = require('../controllers/OccasionController')

router.get('/activeoccasionlist', OccasionController.activeOccasionList)


module.exports = router