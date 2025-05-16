const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')
const uploadProductImg = require('../middleware/uploadProductPhoto')

router.get('/productlist', ProductController.productList)