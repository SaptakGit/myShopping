const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/HomeController')


router.get('/shopbycategory', HomeController.categoryList)
router.get('/shopbyproduct', HomeController.homePorductList)

module.exports = router
