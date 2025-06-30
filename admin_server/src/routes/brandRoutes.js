const express = require('express')
const router = express.Router()
const BrandController = require('../controllers/BeandController')

router.get('/activebrandlist', BrandController.activeBrandList)


module.exports = router