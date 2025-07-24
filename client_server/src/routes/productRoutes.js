const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')

router.get('/productlist', ProductController.productList)
router.get('/productdetail', ProductController.productDetail)

module.exports = router