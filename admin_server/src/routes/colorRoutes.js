const express = require('express')
const router = express.Router()
const ColorController = require('../controllers/ColorController')

router.get('/activecolorlist', ColorController.activeColorList)


module.exports = router