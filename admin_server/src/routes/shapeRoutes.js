const express = require('express')
const router = express.Router()
const ShapeController = require('../controllers/ShapeController')

router.get('/activeshapelist', ShapeController.activeShapeList)


module.exports = router